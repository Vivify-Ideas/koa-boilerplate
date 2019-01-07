const mongoose = require('mongoose');
const config = require('./../config');

module.exports = async () => {
  await mongoose.connect(
    config.mongo.connectionUri,
    config.mongo.options
  );
};
