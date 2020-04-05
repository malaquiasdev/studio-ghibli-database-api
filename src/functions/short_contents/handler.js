const response = require("../../libs/response");
const ShortContentsModel = require("./model");
const crawlImdbSearchPage = require("./crawl_imdb_search_page");
const listAll = require("./list_all");

async function listFlow(_, context) {
  return response.send(context, listAll(response, ShortContentsModel));
}

async function crawlImdbSearchPageFlow(_, context) {
  return response.send(
    context,
    crawlImdbSearchPage(response, ShortContentsModel)
  );
}

module.exports = { listFlow, crawlImdbSearchPageFlow };
