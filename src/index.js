require('dotenv').config();

const Koa = require('koa');

const config = require('./config');
const { logger, dbConnect } = require('./utils');
const { setGlobalMiddlewares } = require('./middlewares');
const { attachRoutes } = require('./routes');

const app = new Koa();

dbConnect();
setGlobalMiddlewares(app);
attachRoutes(app);

app.listen(config.port, () => {
  logger.info(
    `Listening on port ${config.port} (${process.env.NODE_ENV} mode)`
  );
});

module.exports = app;
