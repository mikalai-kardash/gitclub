import { ApolloServer } from 'apollo-server'
import * as environment from 'dotenv'
import Query from './resolvers/Query'
import { kind, definitions } from './schema/github.graphql'

environment.config()

//const typeDefs = gql(importSchema('src/schema/github.graphql'))
const server = new ApolloServer({
    typeDefs: { kind, definitions },
    resolvers: {
        Query,
    }
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
