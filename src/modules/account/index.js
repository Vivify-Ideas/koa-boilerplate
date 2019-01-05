const Router = require('koa-router');

// TODO: add validators here
// const validators = require('./validators');

const router = new Router();
const controller = require('./account.controller');

router.get('/signup', controller.signup);

module.exports = router.routes();
