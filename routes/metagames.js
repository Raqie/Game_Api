const KoaRouter = require('koa-router');
const Router = new KoaRouter();

const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/metagames/';


Router.get(`${BASE_URI}`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('Metagames').find({}, MongoUtils.SearchOptions().WithLimit(50).Build()).toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});

Router.get(`${BASE_URI}:id`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () => {
        Item = await ctx.db.collection('Metagames').findOne({id: parseInt(ctx.params.id)});
        MongoUtils.TrimMongoDBInternals(Item);
        return Item;
    });
});

module.exports = Router;