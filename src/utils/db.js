const mongoose = require('mongoose');
const config = require('./../config');
const logger = require('./logger');

module.exports = async () => {
  await mongoose.connect(
    config.mongo.connectionUri,
    config.mongo.options
  );

  logger.info(
    'MongoDB: Successfully connected'
  );
};
