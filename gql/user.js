const { gql } = require('graphql-tag')
const { generateGqlQueries } = require('./condo')

const COMMON_FIELDS = 'id dv sender { dv fingerprint } createdBy { id name } updatedBy { id name } createdAt updatedAt'
const USER_FIELDS = `{ type name avatar { publicUrl } meta isPhoneVerified isEmailVerified importId importRemoteSystem isAdmin isSupport ${COMMON_FIELDS} }`

const SIGNIN_BY_EMAIL_MUTATION = gql`
    mutation signin($identity: String, $secret: String) {
        auth: authenticateUserWithPassword(email: $identity, password: $secret) {
            user: item {
                id
            }
            token
        }
    }
`

const SIGNIN_BY_PHONE_AND_PASSWORD_MUTATION_WITH_TOKEN = gql`
    mutation authenticateUserWithPhoneAndPassword ($phone: String!, $password: String!) {
        obj: authenticateUserWithPhoneAndPassword(data: { phone: $phone, password: $password }) {
            item {
                id
            }
            token
        }
    }
`

const GET_MY_USERINFO = gql`
    query getUser {
        user: authenticatedUser ${USER_FIELDS}
    }
`

const PREDICT_TICKET_CLASSIFICATION_QUERY = gql`
    query predictTicketClassification ($data: PredictTicketClassificationInput!) {
        obj: predictTicketClassification(data: $data) { id place { id name } category { id name }  }
    }
`

const TICKET_CLASSIFIER_ATTRIBUTES_FIELDS = ' classifier { id place { id name } category { id name } problem { id name } }'
const TICKET_PROPERTY_FIELDS = 'id name address deletedAt addressMeta { dv value }'
const TICKET_FIELDS = `{ canReadByResident completedAt lastCommentAt lastResidentCommentAt isResidentTicket reviewValue reviewComment deadline deferredUntil organization { id name country } property { ${TICKET_PROPERTY_FIELDS} } propertyAddress unitType unitName sectionName sectionType floorName status { id name type organization { id } colors { primary secondary additional } } statusReopenedCounter statusUpdatedAt statusReason number client { id name } clientName clientEmail clientPhone contact { id name phone unitName unitType } operator { id name } assignee { id name } executor { id name } details related { id details } isEmergency isPaid isWarranty meta source { id name type } sourceMeta categoryClassifier { id } placeClassifier { id } problemClassifier { id } ${TICKET_CLASSIFIER_ATTRIBUTES_FIELDS} ${COMMON_FIELDS} }`
const Ticket = generateGqlQueries('Ticket', TICKET_FIELDS)

module.exports = {
    SIGNIN_BY_EMAIL_MUTATION,
    SIGNIN_BY_PHONE_AND_PASSWORD_MUTATION_WITH_TOKEN,
    PREDICT_TICKET_CLASSIFICATION_QUERY,
    GET_MY_USERINFO,
    Ticket,
}