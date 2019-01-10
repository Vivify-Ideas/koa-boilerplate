const Router = require('koa-router');

const { validateMiddleware } = require('./../../middlewares');
const validators = require('./validators');
const controller = require('./account.controller');

const guest = new Router();
guest.post('/signup', validateMiddleware(validators.signup), controller.signup);
guest.post('/login', validateMiddleware(validators.login), controller.login);

const auth = new Router();
auth.get('/test', (ctx) => {
  ctx.body = 'Hello';
});

module.exports = {
  guest: guest.routes(),
  auth: auth.routes(),
};
