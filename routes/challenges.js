const KoaRouter = require('koa-router');
const mongodb = require('mongodb');
const Router = new KoaRouter();

const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/challenges/';

Router.get(`${BASE_URI}`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('Challenges').find({}, MongoUtils.SearchOptions().WithLimit(50).Build()).toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});
Router.get(`${BASE_URI}:id`, async(ctx) => {
    var id = ctx.params.id;
    let queryObj = 
        {
        id: mongodb.Long.fromString(id) 
        }
        let includeOnly = {projection: {_id: 0} }
        await Utils.GuardExecution(ctx, async()=> {
            Item = await ctx.db.collection('Challenges')
            .findOne(queryObj, includeOnly)
            return Item;
    });
});
Router.get(`${BASE_URI}:sort`, async(ctx) => {  
        var id = ctx.params.id;
        let queryObj = 
            {
            difficulty: mongodb.Long.fromString(id)
            }
            await Utils.GuardExecution(ctx, async()=> {
                Item = await ctx.db.collection('Challenges')
                .findOne(queryObj)
                return Item;
    });
});
Router.get(`${BASE_URI}player/:id`, async (ctx)=> { 
    var id = ctx.params.id;
    let queryObj = 
    {
        player: id
    };
    let includeOnly = {projection: {_id: 0} }
    await Utils.GuardExecution(ctx, async()=>{
        Item = await ctx.db.collection('Challenges')
        .findOne(queryObj, includeOnly);
        return Item;
    });
});
module.exports = Router; 