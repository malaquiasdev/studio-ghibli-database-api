const dynamoose = require("dynamoose");

const createDynamodbInstance = (table, schema) => {
  return dynamoose.model(table, schema);
};

module.exports = createDynamodbInstance;
