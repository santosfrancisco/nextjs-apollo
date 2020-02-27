import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import { IGDBSource } from '../data-sources'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
