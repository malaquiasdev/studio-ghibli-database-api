const dynamoose = require("dynamoose");
const { shortContentsSchema } = require("./schemas");

const createDynamodbInstance = (table, schema) => {
  return dynamoose.model(table, schema);
};

module.exports = {
  ShortContentsModel: createDynamodbInstance(
    "StudioGhibliServiceShortContentsTable",
    shortContentsSchema
  ),
};
