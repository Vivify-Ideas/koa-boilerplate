require('dotenv').config();
require('app-module-path').addPath(__dirname);

const Koa = require('koa');
const config = require('config');
const { logger } = require('utils');

const app = new Koa();

app.listen(config.port, () => {
  logger.info(`Api server listening on ${config.port}, in ${process.env.NODE_ENV} mode`);
});

module.exports = app;
