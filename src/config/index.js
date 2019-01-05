const merge = require('lodash/merge');

const appConfig = require('./app');
const authConfig = require('./auth');
const dbConfig = require('./db');

module.exports = merge(
  appConfig,
  authConfig,
  dbConfig
);
