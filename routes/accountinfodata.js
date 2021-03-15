const KoaRouter = require('koa-router')
const mongodb = require('mongodb')

const Router = new KoaRouter()

const Utils = require('../utils')
const MongoUtils = require('../mongoutils')

const BASE_URI = '/profile/'

Router.get(`${BASE_URI}`, async ctx => {
  await Utils.GuardExecution(ctx, async () => {
    AllItems = await ctx.db
      .collection('AccountInfoData')
      .find(
        {},
        MongoUtils.SearchOptions()
          .WithLimit(50)
          .Build()
      )
      .toArray()
    MongoUtils.TrimMongoDBInternals(AllItems)
    return AllItems
  })
})
Router.get(`${BASE_URI}:id`, async ctx => {
  var id = ctx.state.steamId
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db.collection('AccountInfoData').findOne(queryObj)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}:id/short`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = {
    projection: {
      steamId: 1,
      totalExperience: 1,
      playerLevel: 1,
      prestigeLevel: 1,
      silverAmount: 1,
      goldAmount: 1,
      suppliesAmount: 1,
      goldAmount: 1,
      factionMembership: 1
    }
  }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('AccountInfoData')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
module.exports = Router
