const KoaRouter = require('koa-router');
const Router = new KoaRouter();

Router.get('/', async(ctx) => {
    ctx.body = {
        status: 'success',
        message: 'Api server is up.'
    }
});

module.exports = Router;