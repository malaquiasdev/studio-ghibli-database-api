const findAll = require("./crawl_imdb_search_page/parse_data_to_dynamodb_schema");
const response = require("../../libs/response");

function createBody(res) {
  return {
    contents: res,
    total: res.length,
  };
}

async function shortContentsListFlow() {
  const res = await findAll();
  return response.create({ body: createBody(res), statusCode: 200 });
}

module.exports = shortContentsListFlow;
