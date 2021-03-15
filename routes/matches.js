const KoaRouter = require('koa-router');
const Router = new KoaRouter();
const mongodb = require('mongodb');
const Utils = require('../utils');
const MongoUtils = require('../mongoutils');

const BASE_URI = '/matches/';

Router.get(`${BASE_URI}player/:id`, async (ctx)=> { 
    var id = ctx.params.id;
    let queryObj = 
    {
        'playersSummarysArray.playerSteamId': id
    };
    let includeOnly = {projection: {_id:0}}
    await Utils.GuardExecution(ctx, async()=>{
        Item = await ctx.db.collection('Matches').findOne(queryObj, includeOnly);
        return Item;
    });
});
Router.get(`${BASE_URI}serverid/:ip`, async (ctx)=> { 
    var ip = ctx.params.ip;
    let queryObj = 
    {
        serverId: ip
    };
    let includeOnly = {projection: {_id:0}}
    await Utils.GuardExecution(ctx, async()=>{
        Item = await ctx.db.collection('Matches').findOne(queryObj, includeOnly);
        return Item;
    });
});

Router.get(`${BASE_URI}:id/:ip`, async (ctx)=> { 
    var id = ctx.params.id;
    var ip = ctx.params.ip;
    let queryObj = 
    {
        'playersSummarysArray.playerSteamId': id,
        serverId: ip
    };
    let includeOnly = {projection: {_id: 0}}
    await Utils.GuardExecution(ctx, async()=>{
        Item = await ctx.db.collection('Matches').findOne(queryObj, includeOnly);
        return Item;
    });
}); 
Router.get(`${BASE_URI}`, async(ctx) => {  //This shows all matches(sorted)
    await Utils.GuardExecution(ctx, async () => {
        AllItems = await ctx.db.collection('Matches').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
        .project({})
        .sort({date: -1, serverId: -1,})
        .toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});
Router.get(`${BASE_URI}sort/bestplayer`, async(ctx) => {
     await Utils.GuardExecution(ctx, async () => {
            Statistics = ctx.db.collection('Matches').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
            .project({
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.kills':1,
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.deaths':1,
                'playersSummarysArray.playerStatistics.generalPlayerStatistics.assists':1})
            .sort({kills: -1, deaths: 1})
            .toArray();
            MongoUtils.TrimMongoDBInternals(Statistics);
            return Statistics;
        });
});

Router.get(`${BASE_URI}sort/bestinmatch`, async(ctx) => { 
    await Utils.GuardExecution(ctx, async () => {
        AllItems = ctx.db.collection('Matches').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
        .project({
             'playersSummarysArray.currentMatchPlayersStatistics.generalPlayerStatistics':1,})
        .sort({date: -1, serverId: -1,})
        .toArray();
        MongoUtils.TrimMongoDBInternals(AllItems);
        return AllItems;
    });
});

Router.get(`${BASE_URI}sort/bestweapon`, async(ctx) => {
    await Utils.GuardExecution(ctx, async () =>{
        GunStatistics = ctx.db.collection('Matches').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
        .project({
            'playersSummarysArray.playerStatistics.weaponsPlayerStatistics.killsPerWeapon':1})
        .toArray();
        MongoUtils.TrimMongoDBInternals(GunStatistics);
        return GunStatistics;
    });
});

Router.get(`${BASE_URI}sort/longest`, async(ctx) => {
    await Utils.GuardExecution(ctx, async ()=>{
        Longest = ctx.db.collection('Matches').find({}, MongoUtils.SearchOptions().WithLimit(50).Build())
        .project({
            'playersSummarysArray.playerStatistics.weaponsPlayerStatistics.longestEnemyHit':1,
            'playersSummarysArray.playerStatistics.weaponsPlayerStatistics.longestEnemyKill':1})
        .sort({date: 1})
        .toArray();
        MongoUtils.TrimMongoDBInternals(Longest);
        return Longest;
    });
});

module.exports = Router;