const { gql } = require('graphql-tag')
const { UserClient, generateGqlQueries } = require('condo-graphql-client')

const COMMON_FIELDS = 'id dv sender { dv fingerprint } createdBy { id name } updatedBy { id name } createdAt updatedAt'
const PREDICT_TICKET_CLASSIFICATION_QUERY = gql`
    query predictTicketClassification ($data: PredictTicketClassificationInput!) {
        obj: predictTicketClassification(data: $data) { id place { id name } category { id name }  }
    }
`
const TICKET_CLASSIFIER_ATTRIBUTES_FIELDS = ' classifier { id place { id name } category { id name } problem { id name } }'
const TICKET_PROPERTY_FIELDS = 'id name address deletedAt addressMeta { dv value }'
const TICKET_FIELDS = `{  completedAt organization { id name country } property { ${TICKET_PROPERTY_FIELDS} } propertyAddress unitType unitName sectionName sectionType floorName status { id name type organization { id } colors { primary secondary additional } } number client { id name } clientName clientEmail clientPhone contact { id name phone unitName unitType }  details source { id name type } sourceMeta ${TICKET_CLASSIFIER_ATTRIBUTES_FIELDS} ${COMMON_FIELDS} }`

const TicketGql = generateGqlQueries('Ticket', TICKET_FIELDS)

const TICKET_FILE_FIELDS = `{ id file { id originalFilename publicUrl mimetype } organization { id } ticket { id } ${COMMON_FIELDS} }`
const TicketFileGql = generateGqlQueries('TicketFile', TICKET_FILE_FIELDS)

class TicketBot extends UserClient {

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

    async createTicketFile (createInput = {}) {
        return await this.createModel({
            modelGql: TicketFileGql,
            createInput,
        })
    }

}

module.exports = {
    TicketBot,
}