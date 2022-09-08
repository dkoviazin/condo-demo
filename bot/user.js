const { CondoBot } = require('./condo')
const { has } = require('lodash')

const {
    SIGNIN_BY_EMAIL_MUTATION,
    SIGNIN_BY_PHONE_AND_PASSWORD_MUTATION_WITH_TOKEN,
    GET_MY_USERINFO,
    PREDICT_TICKET_CLASSIFICATION_QUERY,
    Ticket: TicketGql,
} = require('../gql/user')


class UserBot extends CondoBot {

    userId

    async signIn () {
        if (has(this.authRequisites, 'phone')) {
            await this.singInByPhoneAndPassword()
        } else {
            await this.singInByEmailAndPassword()
        }
        return await this.me()
    }

    async singInByEmailAndPassword () {
        const { identity,  password: secret } = this.authRequisites
        const { data: { auth: { user, token } } } = await this.client.mutate({
            mutation: SIGNIN_BY_EMAIL_MUTATION,
            variables: { identity, secret },
        })
        this.userId = user.id
        this.authToken = token
    }

    async singInByPhoneAndPassword () {
        const { phone,  password } = this.authRequisites
        const { data: { obj: { item: user, token } } } = await this.client.mutate({
            mutation: SIGNIN_BY_PHONE_AND_PASSWORD_MUTATION_WITH_TOKEN,
            variables: { ...this.dvSender(), phone, password },
        })
        this.userId = user.id
        this.authToken = token
    }

    async me () {
        const { data: { user } } = await this.client.query({ query: GET_MY_USERINFO })
        return user
    }

    async classifyTicket (details) {
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
    UserBot,
}
