const dynamoose = require("dynamoose");
const createDynamodbInstance = require("../../../libs/create_dynamodb_instance");
const createShortContentsSchema = require("./create_short_contents_schema");

const shortContentsSchema = createShortContentsSchema(dynamoose);

const ShortContentsModel = createDynamodbInstance(
  "StudioGhibliServiceShortContentsTable",
  shortContentsSchema
);

module.exports = ShortContentsModel;
