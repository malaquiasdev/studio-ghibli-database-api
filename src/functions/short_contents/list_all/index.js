const response = require("../../../libs/response");
const ShortContentsModel = require("../model");

const CACHE_TIME_24_HOURS = 86400;

function createBody(res) {
  return {
    contents: res,
    total: res.length,
  };
}

async function listAll() {
  const res = await ShortContentsModel.scan().exec();
  return response.create({
    body: createBody(res),
    cacheMaxAge: CACHE_TIME_24_HOURS,
  });
}

module.exports = listAll;
