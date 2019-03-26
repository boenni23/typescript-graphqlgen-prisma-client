import { QueryResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface QueryParent {}

export const Query: QueryResolvers.Type = {
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, args, ctx) => ctx.db.post({ id: args.id }),
  users: (parent,args, ctx) => ctx.db.users(args),
}
