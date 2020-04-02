const fetchSearchPageData = require("./fetch_search_page_data");
const parseDataToDynamodbSchema = require("./parse_data_to_dynamodb_schema");
const ShortContentsModel = require("../model");

async function crawlImdbSearchPage(response) {
  const searchPageData = await fetchSearchPageData();
  const data = parseDataToDynamodbSchema(searchPageData);
  await ShortContentsModel.batchPut(data, { overwrite: false });
  return response.create({ body: data });
}

module.exports = crawlImdbSearchPage;
