import { MutationResolvers } from '../generated/resolvers'

export interface MutationParent {}

export const Mutation: MutationResolvers.Type = {
  createDraft: (parent, args, ctx) => {
    return ctx.db.createPost({
      title: args.title,
      content: args.content,
      author: { connect: { email: args.authorEmail } },
    })
  },
  createUser: (parent, {data}, ctx) => ctx.db.createUser(data),
  deletePost: (parent, { id }, ctx) => ctx.db.deletePost({ id }),
  publish: (parent, { id }, ctx) => {
    return ctx.db.updatePost({
      where: { id },
      data: { isPublished: true },
    })
  },
}
