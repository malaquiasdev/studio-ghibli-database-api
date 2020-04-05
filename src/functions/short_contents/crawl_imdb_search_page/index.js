const fetchSearchPageData = require("./fetch_search_page_data");
const parseDataToDynamodbSchema = require("./parse_data_to_dynamodb_schema");
const deleteOldestData = require("./delete_oldest_data");

async function crawlImdbSearchPage(response, ShortContentsModel) {
  const searchPageData = await fetchSearchPageData();
  const data = parseDataToDynamodbSchema(searchPageData);
  await deleteOldestData(ShortContentsModel);
  await ShortContentsModel.batchPut(data, { overwrite: false });
  return response.create({ body: data });
}

module.exports = crawlImdbSearchPage;
