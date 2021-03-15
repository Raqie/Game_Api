const KoaRouter = require('koa-router');
const Router = new KoaRouter();
const mongodb = require('mongodb');
const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/products/';

Router.get(`${BASE_URI}sort`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
       AllItems = await ctx.db.collection('Products').find({}, MongoUtils.SearchOptions().WithSkip().WithLimit(50).Build()).sort({ price: -1, id: -1 })
       .toArray();  
       MongoUtils.TrimMongoDBInternals(AllItems);
       return AllItems;
   });
});

Router.get(`${BASE_URI}`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('Products').find({}, MongoUtils.SearchOptions().WithLimit(50).WithSkip(60).Build())
        .toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});
Router.get(`${BASE_URI}:id`, async (ctx)=>{
    var id = ctx.params.id;
    let queryObj = 
        { 
            id: mongodb.Long.fromString(id)
        }
        await Utils.GuardExecution(ctx, async()=> {
            Item = await ctx.db.collection('Products')
            .findOne(queryObj)
            MongoUtils.TrimMongoDBInternals(Item);
            return Item;
        });
});
module.exports = Router;