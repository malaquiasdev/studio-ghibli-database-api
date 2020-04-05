const fetchSearchPageData = require("./fetch_search_page_data");
const parseDataToDynamodbSchema = require("./parse_data_to_dynamodb_schema");

async function crawlImdbSearchPage(response, ShortContentsModel) {
  const searchPageData = await fetchSearchPageData();
  const data = parseDataToDynamodbSchema(searchPageData);
  await ShortContentsModel.batchPut(data, { overwrite: false });
  return response.create({ body: data });
}

module.exports = crawlImdbSearchPage;
