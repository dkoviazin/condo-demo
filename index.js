require('dotenv').config()

const { createReadStream } = require('fs')

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
    console.log('currentUser', currentUser)
    const classifier = await bot.classifyTicket(ticket.details)
    console.log('classifier', classifier)
    const { id: classifierId } = classifier
    const createInput = {
        ...ticket,
        classifier: { connect: { id: classifierId } },
    }
    const newTicket = await bot.createTicket(createInput)
    console.log('newTicket', newTicket)
    const ticketFile = await bot.createTicketFile({
        ticket: { connect: { id: newTicket.id } },
        file: bot.createUploadFile(createReadStream('./Readme.md')),
    })
    console.log('ticketFile', ticketFile)
}

bootstrap().then(() => {
    console.log('All done')
    process.exit(0)
}).catch(error => {
    console.error(error)
    process.exit(1)
})



