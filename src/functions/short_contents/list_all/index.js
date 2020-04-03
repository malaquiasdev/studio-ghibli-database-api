const response = require("../../../libs/response");
const ShortContentsModel = require("../model");
const filterUniqueItem = require("./filter_unique_item");
const createBody = require("./create_body");

const CACHE_TIME_24_HOURS = 86400;

async function listAll() {
  const data = await ShortContentsModel.scan().exec();
  const uniqueDataList = filterUniqueItem(data);
  return response.create({
    body: createBody(uniqueDataList),
    cacheMaxAge: CACHE_TIME_24_HOURS,
  });
}

module.exports = listAll;
