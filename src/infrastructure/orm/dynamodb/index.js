const dynamoose = require('dynamoose');

function createDynamodbInstance(tableName, schemaSkeleton) {
  return dynamoose.model(tableName, dynamoose.Schema(schemaSkeleton));
}

module.exports = createDynamodbInstance;
