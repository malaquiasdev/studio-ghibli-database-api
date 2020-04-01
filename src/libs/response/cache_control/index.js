const noCache = require("./no_cache");

const DEFAULT_TYPE_VALUE = "public";

function isOptionsValid(options) {
  return options && options.maxAge !== undefined && options.maxAge > 0;
}

/**
 *  Sets the `cache-control` header. If none value is passed to this function the return will be a NO CACHE value
 *
 *  @public
 *  @memberof Response
 *  @function cache
 *  @param {Object} [options] - an options object
 *  @param {Number} options.maxAge - max-age in seconds
 *  @param {String} [type="public"] - value of the header (`"public"` or `"private"`)
 *  @returns {Object} the value set to the header
 *
 */
function cacheControl(options, type = DEFAULT_TYPE_VALUE) {
  if (isOptionsValid(options)) {
    return { "Cache-Control": `${type}, max-age=${options.maxAge}` };
  }
  return noCache();
}

module.exports = cacheControl;
