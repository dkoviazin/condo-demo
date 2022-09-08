require('dotenv').config()
const { UserBot } = require('./bot/user')
const { Logger } = require('./lib/logger')

const {
    TICKET_OTHER_SOURCE_ID,
} = require('./constants')

const { endpoint, authRequisites = {} } = process.env.INTEGRATION ? JSON.parse(process.env.INTEGRATION) : {}

const organizationId = process.env.ORGANIZATION
const propertyId = process.env.PROPERTY_ID

const ticket = {
    details: 'Не набирается вода в туалете в унитаз просьба от Председателя МКД',
}

const logger = new Logger()

const bootstrap = async () => {
    const bot = new UserBot(endpoint, authRequisites)
    const currentUser = await bot.signIn()
    logger.info('Logged in as ', currentUser)
    const classifier = await bot.classifyTicket(ticket.details)
    const { id: classifierId, place, category } = classifier
    logger.info('Ticket is classified as', { place, category, classifier })

    const createInput = {
        ...ticket,
        organization: { connect: { id: organizationId } },
        property: { connect: { id: propertyId } },
        classifier: { connect: { id: classifierId } },
        source: { connect: { id: TICKET_OTHER_SOURCE_ID }}
    }

    const newTicket = await bot.createTicket(createInput)
    logger.info('Created new ticket', newTicket)
}

bootstrap().then(() => {
    console.log('All done')
    process.exit(0)
}).catch(error => {
    console.error(error)
    process.exit(1)
})



