const { gql } = require('graphql-tag')
const { UserBot, generateGqlQueries } = require('condo-graphql-client')

const COMMON_FIELDS = 'id dv sender { dv fingerprint } createdBy { id name } updatedBy { id name } createdAt updatedAt'
const PREDICT_TICKET_CLASSIFICATION_QUERY = gql`
    query predictTicketClassification ($data: PredictTicketClassificationInput!) {
        obj: predictTicketClassification(data: $data) { id place { id name } category { id name }  }
    }
`
const TICKET_CLASSIFIER_ATTRIBUTES_FIELDS = ' classifier { id place { id name } category { id name } problem { id name } }'
const TICKET_PROPERTY_FIELDS = 'id name address deletedAt addressMeta { dv value }'
const TICKET_FIELDS = `{ canReadByResident completedAt lastCommentAt lastResidentCommentAt isResidentTicket reviewValue reviewComment deadline deferredUntil organization { id name country } property { ${TICKET_PROPERTY_FIELDS} } propertyAddress unitType unitName sectionName sectionType floorName status { id name type organization { id } colors { primary secondary additional } } statusReopenedCounter statusUpdatedAt statusReason number client { id name } clientName clientEmail clientPhone contact { id name phone unitName unitType } operator { id name } assignee { id name } executor { id name } details related { id details } isEmergency isPaid isWarranty meta source { id name type } sourceMeta categoryClassifier { id } placeClassifier { id } problemClassifier { id } ${TICKET_CLASSIFIER_ATTRIBUTES_FIELDS} ${COMMON_FIELDS} }`

const TicketGql = generateGqlQueries('Ticket', TICKET_FIELDS)

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