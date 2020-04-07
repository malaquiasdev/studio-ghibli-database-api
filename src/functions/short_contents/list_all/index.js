const createBody = require("./create_body");

const CACHE_TIME_24_HOURS = 86400;

async function listAll(response, ShortContentsModel) {
  const data = await ShortContentsModel.scan().exec();
  return response.create({
    body: createBody(data),
    cacheMaxAge: CACHE_TIME_24_HOURS,
  });
}

module.exports = listAll;
