const {
    PREDICT_TICKET_CLASSIFICATION_QUERY,
    Ticket: TicketGql,
} = require('./gql')

const { UserBot } = require('condo-graphql-client')

class TicketBot extends UserBot {

    async classifyTicket (details = '') {
        const { data: { obj } } = await this.client.query({
            query: PREDICT_TICKET_CLASSIFICATION_QUERY,
            variables: { data: { details } },
        })
        return obj
    }

    async createTicket (createInput = {}) {
        return await this.createModel({
            modelGql: TicketGql,
            createInput,
        })
    }


}

module.exports = {
    TicketBot,
}