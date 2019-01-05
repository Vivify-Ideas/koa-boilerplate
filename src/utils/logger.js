const { logsPath, isDev } = require('config');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: logsPath + '/debug.log', json: false }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: logsPath + '/exceptions.log',
      json: false,
    }),
  ],
  exitOnError: false,
});

if (isDev) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
