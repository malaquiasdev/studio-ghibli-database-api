const logger = require("../../logger");
const noCache = require("../cache_control/no_cache");
const toAWS = require("../to_aws");
const getTheBody = require("./get_the_body");

/*
 * Handler the error and convert it to a valid response obj to AWS serverless model
 *  @private
 *  @memberof Response
 *  @function toAWS
 *  @param {Object} [err] - value that contains all information to json.stringify
 *  @param {Number} [requestId] - AWS request id tracing
 *  @returns {Object} the response object
 */
function handlerError(err, requestId) {
  logger.error(err);
  const body = getTheBody(err, requestId);
  return toAWS(body, noCache(), body.error.statusCode || body.statusCode);
}

module.exports = handlerError;
