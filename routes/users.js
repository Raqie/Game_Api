const KoaRouter = require('koa-router');
const mongodb = require('mongodb');

const Router = new KoaRouter();

const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/users/';

Router.get(`${BASE_URI}`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('PlayerStatistics').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
        .toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});
Router.get(`${BASE_URI}:id`, async (ctx)=>{
    var id = ctx.params.id;
    let queryObj = 
        { 
            steamId: mongodb.Long.fromString(id)
        }
        await Utils.GuardExecution(ctx, async()=> {
            Item = await ctx.db.collection('AccountInfoData','AccountConfigData')
            .findOne(queryObj)
            MongoUtils.TrimMongoDBInternals(Item);
            return Item;
        });
});
Router.get(`${BASE_URI}sort`, async(ctx) => {
    let SortParams = {};
    SortParams[ctx.params.by] = 1;
        await Utils.GuardExecution(ctx, async () => {
            AllItems = await ctx.db.collection('PlayerStatistics').find({}, MongoUtils.SearchOptions().WithSkip().WithLimit(50).Build())
            .sort({'generalPlayerStatistics.kills':-1})
            .toArray();
            MongoUtils.TrimMongoDBInternals(AllItems);
            return AllItems;
        });
});
Router.get(`${BASE_URI}:id/short`, async (ctx)=>{ 
    var id = ctx.params.id;
    let queryObj = 
        {
            steamId: mongodb.Long.fromString(id)
        }
        await Utils.GuardExecution(ctx, async()=> {
            Item = await ctx.db.collection('PlayerStatistics')
            .findOne(queryObj)
            .project({
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.kills':1,
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.deaths':1,
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.assists':1})
            .sort({})    
            .toArray();
            MongoUtils.TrimMongoDBInternals(Item);
            return Item;
        });
});
module.exports = Router;