const dynamoose = require("dynamoose");
const createShortContentsSchema = require("./short_contents");

module.exports = {
  shortContentsSchema: createShortContentsSchema(dynamoose),
};
