const response = require("../../../libs/response");
const ShortContentsModel = require("../model");
const parseShortContentsModelToContents = require("./parse_short_contents_model_to_contents.js");

const CACHE_TIME_24_HOURS = 86400;

function createBody(res) {
  return {
    contents: parseShortContentsModelToContents(res),
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
