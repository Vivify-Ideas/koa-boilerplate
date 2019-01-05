/* External Middlewares */
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const requestLogger = require('koa-logger');
const validate = require('koa-validate');


/* Internal Middlewares */
const urlTokenMiddleware = require('./url-token.middleware');

const setGlobalMiddlewares = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));
  app.use(requestLogger());

  validate(app);
};

module.exports = {
  setGlobalMiddlewares,
  urlTokenMiddleware,
};
