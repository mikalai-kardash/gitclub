import { ApolloServer } from 'apollo-server'
import * as environment from 'dotenv'
import Query from './resolvers/Query'
import Repository from './resolvers/Repository'
import { kind, definitions } from './schema/github.graphql'

environment.config()

const server = new ApolloServer({
    typeDefs: { kind, definitions },
    resolvers: {
        Query,
        Repository,
    }
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
}).catch(err => console.log(err))


