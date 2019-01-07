const Router = require('koa-router');

const { validateMiddleware } = require('./../../middlewares');
const validators = require('./validators');

const router = new Router();
const controller = require('./account.controller');

router.get('/signup', validateMiddleware(validators.signup), controller.signup);

module.exports = router.routes();
