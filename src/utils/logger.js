const winston = require('winston');
const { logsPath, isDev } = require('./../config');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: logsPath + '/debug.log',
      json: false,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: logsPath + '/exceptions.log',
      json: false,
    }),
  ],
  exitOnError: false,
});

process.on('unhandledRejection', (reason, p) => {
  logger.error(
    `Possibly Unhandled Rejection at: Promise ${p} reason ${reason}`
  );
});

if (isDev) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }));
  logger.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }));
}

module.exports = logger;
