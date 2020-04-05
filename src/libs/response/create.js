const cacheControl = require("./cache_control");

/**
 *  Create a base response object that can be used in the send respons method
 *
 *  @public
 *  @memberof Response
 *  @function create
 *  @param {Object} [anonymous] - wrapper all function params
 *  @param {Object} [body] - value to json.stringify
 *  @param {Object} [headers] - headers to set on the response
 *  @param {Number} [statusCode] - http status code
 *  @param {Number} [cacheMaxAge] - max-age in seconds
 *  @returns {Object} the value set to the header
 *
 */
function create({ body, headers, statusCode = 200, cacheMaxAge = 0 }) {
  const cache = cacheControl({ maxAge: cacheMaxAge });
  return {
    body,
    statusCode,
    headers: {
      ...headers,
      ...cache,
    },
  };
}

module.exports = create;
