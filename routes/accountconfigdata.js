const KoaRouter = require('koa-router');
const mongodb = require('mongodb');
const Router = new KoaRouter();

const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/accountconfigdata/';

Router.get(`${BASE_URI}`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('AccountConfigData').find({},
        MongoUtils.SearchOptions().WithLimit(50).Build()).toArray();
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
        let includeOnly = {projection: {_id: 0} }
        await Utils.GuardExecution(ctx, async()=> {
            Item = await ctx.db.collection('AccountConfigData')
            .findOne(queryObj, includeOnly)
            return Item;
        });
});
module.exports = Router;