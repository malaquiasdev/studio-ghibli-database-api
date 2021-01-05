const dynamoose = require('dynamoose');
const config = require('../../config');

dynamoose.aws.sdk.config.update({
  accessKeyId: config.DYNAMODB.AWS.ACCESS_KEY_ID,
  secretAccessKey: config.DYNAMODB.AWS.SECRET_ACCESS_KEY,
  region: config.DYNAMODB.AWS.REGION,
});

function createDynamodbInstance(tableName, schemaSkeleton) {
  return dynamoose.model(tableName, new dynamoose.Schema(schemaSkeleton));
}

module.exports = createDynamodbInstance;
