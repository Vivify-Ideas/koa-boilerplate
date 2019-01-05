const mount = require('koa-mount');

const accountModule = require('./../modules/account');

module.exports = (app) => {
  app.use(mount('/api/account', accountModule));
};
