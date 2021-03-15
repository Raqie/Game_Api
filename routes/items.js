const KoaRouter = require('koa-router')
const Router = new KoaRouter()
const mongodb = require('mongodb')
const Utils = require('../utils')
const MongoUtils = require('../mongoutils')

const BASE_URI = '/items/'

Router.get(`${BASE_URI}id/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    id: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { _id: 0 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db.collection('ItemsInfo').findOne(queryObj, includeOnly)
    return Item
  })
})
Router.get(`${BASE_URI}category/:category`, async ctx => {
  var category = ctx.params.category
  let queryObj = {
    category: mongodb.Long.fromString(category)
  }
  let includeOnly = { projection: { _id: 0 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db.collection('ItemsInfo').findOne(queryObj, includeOnly)
    return Item
  })
})
Router.get(`${BASE_URI}price/:price`, async ctx => {
  var price = ctx.params.price
  let queryObj = {
    price: mongodb.Long.fromString(price)
  }
  let includeOnly = { projection: { _id: 0 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db.collection('ItemsInfo').findOne(queryObj, includeOnly)
    return Item
  })
})
Router.get(`${BASE_URI}sort/:by/des`, async ctx => {
  let SortParams = {}
  SortParams[ctx.params.by] = -1
  await Utils.GuardExecution(ctx, async () => {
    AllItems = await ctx.db
      .collection('ItemsInfo')
      .find(
        {},
        MongoUtils.SearchOptions()
          .WithLimit(50)
          .Build()
      )
      .sort(SortParams)
      .toArray()
    MongoUtils.TrimMongoDBInternals(AllItems)
    return AllItems
  })
})

Router.get(`${BASE_URI}sort/:by`, async ctx => {
  let SortParams = {}
  SortParams[ctx.params.by] = 1
  await Utils.GuardExecution(ctx, async () => {
    AllItems = await ctx.db
      .collection('ItemsInfo')
      .find(
        {},
        MongoUtils.SearchOptions()
          .WithLimit(50)
          .Build()
      )
      .sort(SortParams)
      .toArray()
    MongoUtils.TrimMongoDBInternals(AllItems)
    return AllItems
  })
})

Router.get(`${BASE_URI}sort`, async ctx => {
  await Utils.GuardExecution(ctx, async () => {
    AllItems = await ctx.db
      .collection('ItemsInfo')
      .find(
        {},
        MongoUtils.SearchOptions()
          .WithLimit(50)
          .Build()
      )
      .sort({ id: 1 })
      .toArray()
    MongoUtils.TrimMongoDBInternals(AllItems)
    return AllItems
  })
})

Router.get(`${BASE_URI}`, async ctx => {
  await Utils.GuardExecution(ctx, async () => {
    AllItems = await ctx.db
      .collection('ItemsInfo')
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

Router.get(`${BASE_URI}price`, async ctx => {
  await Utils.GuardExecution(ctx, async () => {
    AllItem = await ctx.db
      .collection('ItemsInfo')
      .find({}, MongoUtils.WithLimit(50).Build())
      .project({ 'id.name.category.price.currency': 1 })
      .sort({ price: 1 })
      .toArray()
    return AllItem
  })
})
module.exports = Router
