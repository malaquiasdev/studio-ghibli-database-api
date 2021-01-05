const dynamoose = require('dynamoose');

function createDynamodbInstance(tableName, schema) {
  return dynamoose.model(tableName, schema);
}

module.exports = createDynamodbInstance;
