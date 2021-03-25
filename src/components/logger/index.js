const logger = require('pino')();

function logInfo({ params = {}, message }) {
  logger.info(JSON.stringify(params), message);
}

function logError({ params = {}, message }) {
  logger.error(JSON.stringify(params), message);
}

module.exports = { logInfo, logError };
