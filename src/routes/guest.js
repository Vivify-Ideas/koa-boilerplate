const mount = require('koa-mount');

module.exports = (app) => {
  app.use(mount('/test', (ctx) => {
    ctx.body = 'Hello my friend!';
  }));
};
