import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'
import {typeDefs} from '../../apollo/type-defs'
import {resolvers} from  '../../apollo/resolvers'
import { IGDBSource } from '../../data-sources'

const apolloServer = new ApolloServer({ 
  schema,
  dataSources: () => ({
    IGDB: new IGDBSource(),
  }),
  context: () => ({
    token: '0ecda835fb7f168ecb0129800aea3571',
  }),
 })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
