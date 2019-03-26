import { shield, IRules } from 'graphql-shield'


const allShields:IRules = {
    Query: {
    },
    Mutation: {   
    },
    Subscription: {
    }
}

export default shield(allShields)