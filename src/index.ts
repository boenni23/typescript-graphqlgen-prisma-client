import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import auth from './auth';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [auth],
  context: {
    db: prisma,
  },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
