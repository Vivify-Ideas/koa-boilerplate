const mount = require('koa-mount');

module.exports = (app) => {
  app.use(mount('/', (ctx) => {
    ctx.body = 'Hello my friend!';
  }));
};
