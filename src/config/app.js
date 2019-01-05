const path = require('path');
const { ENVIRONMENTS } = require('./../constants');

const env = process.env.NODE_ENV || ENVIRONMENTS.DEVELOPMENT;

module.exports = {
  env,
  port: process.env.APP_PORT || 3000,
  url: process.env.APP_URL || 'http://localhost:3000',
  isDev: env === ENVIRONMENTS.DEVELOPMENT,
  logsPath: path.resolve(process.cwd(), 'logs'),
};
