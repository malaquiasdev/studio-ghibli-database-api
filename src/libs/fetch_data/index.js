const axios = require("axios");
const cheerio = require("cheerio");
const logger = require("../logger");

async function fetchData(url) {
  try {
    const result = await axios(url);
    return cheerio.load(result.data);
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = fetchData;
