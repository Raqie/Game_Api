const KoaRouter = require('koa-router')
const mongodb = require('mongodb')
const Router = new KoaRouter()

const Utils = require('../utils')
const MongoUtils = require('../mongoutils')

const BASE_URI = '/playerstatistics/'

Router.get(`${BASE_URI}:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }

  let includeOnly = { projection: { _id: 0 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    return Item
  })
})
Router.get(`${BASE_URI}:id/kills`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  await Utils.GuardExecution(ctx, async () => {
    pStatistics = ctx.db
      .collection('Matches')
      .find(
        {},
        MongoUtils.SearchOptions()
          .WithLimit(50)
          .Build()
      )
      .project({
        'playersSummarysArray.playerStatistics.generalPlayerStatistics.kills': 1,
        'playersSummarysArray.playerStatistics.generalPlayerStatistics.deaths': 1,
        'playersSummarysArray.playerStatistics.generalPlayerStatistics.assists': 1
      })
      .sort({})
      .toArray()
    MongoUtils.TrimMongoDBInternals(queryObj, pStatistics)
    return pStatistics
  })
})

Router.get(`${BASE_URI}general/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, generalPlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})

Router.get(`${BASE_URI}weapons/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = {
    projection: {
      steamId: 1,
      weaponsPlayerStatistics: 1,
      killsPerWeapon: 1,
      longestEnemyHit: 1,
      longestEnemyKill: 1
    }
  }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}gadgets/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, gadgetsPlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}strikes/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, strikesPlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}squad/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, squadplayPlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}warzone/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, warzonePlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}recon/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = { projection: { steamId: 1, reconPlayerStatistics: 1 } }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}teamdeathmatch/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = {
    projection: { steamId: 1, teamDeathmatchPlayerStatistics: 1 }
  }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
Router.get(`${BASE_URI}breakthrough/:id`, async ctx => {
  var id = ctx.params.id
  let queryObj = {
    steamId: mongodb.Long.fromString(id)
  }
  let includeOnly = {
    projection: { steamId: 1, breakthroughPlayerStatistics: 1 }
  }
  await Utils.GuardExecution(ctx, async () => {
    Item = await ctx.db
      .collection('PlayerStatistics')
      .findOne(queryObj, includeOnly)
    MongoUtils.TrimMongoDBInternals(Item)
    return Item
  })
})
module.exports = Router
