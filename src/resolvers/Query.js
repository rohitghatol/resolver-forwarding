const { forwardTo } = require('prisma-binding')

const Query = {
  async level1s(parent, args, ctx, info) {
    return ctx.db.query.level1s(args, info);
  }
}

module.exports = { Query }
