require('dotenv').config()

const { TicketBot } = require('./ticket/ticketBot')

const { endpoint, authRequisites = {} } = process.env.INTEGRATION ? JSON.parse(process.env.INTEGRATION) : {}

const organizationId = process.env.ORGANIZATION
const propertyId = process.env.PROPERTY_ID
const TICKET_OTHER_SOURCE_ID = '7da1e3be-06ba-4c9e-bba6-f97f278ac6e4'

const ticket = {
    details: 'Не набирается вода в туалете в унитаз просьба от Председателя МКД',
    organization: { connect: { id: organizationId } },
    property: { connect: { id: propertyId } },
    source: { connect: { id: TICKET_OTHER_SOURCE_ID }},
}

const bootstrap = async () => {
    const bot = new TicketBot(endpoint, authRequisites)
    const currentUser = await bot.signIn()
    console.log('Logged in as ', currentUser)
    const classifier = await bot.classifyTicket(ticket.details)
    const { id: classifierId, place, category } = classifier
    console.log('Ticket is classified as', { place, category, classifier })
    const createInput = {
        ...ticket,
        classifier: { connect: { id: classifierId } },
    }
    const newTicket = await bot.createTicket(createInput)
    console.log('Created new ticket', newTicket)
}

bootstrap().then(() => {
    console.log('All done')
    process.exit(0)
}).catch(error => {
    console.error(error)
    process.exit(1)
})



