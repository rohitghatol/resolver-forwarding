
const Mutation = {
    async createLevel1(parent, args, ctx, info) {
        return ctx.db.mutation.createLevel1(args, info);
    }
}

module.exports = { Mutation }