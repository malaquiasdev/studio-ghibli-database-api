/*
 * Convert the params in a valid response obj to AWS serverless model
 *  @private
 *  @memberof Response
 *  @function toAWS
 *  @param {Object} [body] - value to json.stringify
 *  @param {Object} [headers] - headers to set on the response
 *  @param {Number} [statusCode] - http status code
 *  @returns {Object} the response object
 */
function toAWS(body, headers, statusCode = 200) {
  const mergeHeaders = {
    ...headers,
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers":
      "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, X-Amz-User-Agent",
  };
  return {
    statusCode,
    headers: mergeHeaders,
    body: JSON.stringify(body),
  };
}

module.exports = toAWS;
