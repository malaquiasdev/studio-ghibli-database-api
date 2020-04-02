const response = require("../../libs/response");
const crawlImdbSearchPage = require("./crawl_imdb_search_page");
const shortContentsListFlow = require("./list_all");

async function listFlow(_, context) {
  return response.send(context, shortContentsListFlow());
}

async function crawlImdbSearchPageFlow(_, context) {
  return response.send(context, crawlImdbSearchPage(response));
}

module.exports = { listFlow, crawlImdbSearchPageFlow };
