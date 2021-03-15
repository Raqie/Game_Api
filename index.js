const Utils = require('./utils')
const authorization = require('./Middleware/authorization')
const Koa = require('koa')
const KoaMongo = require('koa-mongo')

const IndexRoutes = require('./routes/index')
const ItemsRoutes = require('./routes/items')
const UsersRoutes = require('./routes/users')
const MatchesRoutes = require('./routes/matches')
const FactionsRoutes = require('./routes/factions')
const MetagamesRoutes = require('./routes/metagames')
const PlayerStatisticsRoutes = require('./routes/playerstatistics')
const ProductsRoutes = require('./routes/products')
const ChallengesRoutes = require('./routes/challenges')
const AccountConfigData = require('./routes/accountconfigdata')
const AccountInfoData = require('./routes/accountinfodata')
const app = new Koa()

app.use(authorization)

// app.use(
//   KoaMongo({
//     host: '192.168.0.60',
//     port: 27017,
//     user: '',
//     pass: '',
//     db: 'WW3',
//     authSource: 'admin',
//     max: 100,
//     min: 1,
//     acquireTimeoutMillis: 10
//   })
// )

app.use(async (ctx, next) => {
  await next()
  if (parseInt(ctx.status) === 404) {
    ctx.status = 404
    ctx.body = Utils.CreateFailureResponse('An error has occured.')
  }
})

app.use(IndexRoutes.routes())
app.use(ItemsRoutes.routes())
app.use(UsersRoutes.routes())
app.use(MatchesRoutes.routes())
app.use(FactionsRoutes.routes())
app.use(MetagamesRoutes.routes())
app.use(PlayerStatisticsRoutes.routes())
app.use(ProductsRoutes.routes())
app.use(ChallengesRoutes.routes())
app.use(AccountConfigData.routes())
app.use(AccountInfoData.routes())
app.listen(9090)
