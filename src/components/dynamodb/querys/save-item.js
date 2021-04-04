const { dynamoDBClient } = require('../utils/aws-dynamodb');

async function dynamoDBSaveItem(tableName, data) {
  const params = {
    TableName: tableName,
    Item: {
      ...data,
    },
  };
  return dynamoDBClient.put(params).promise();
}

module.exports = dynamoDBSaveItem;
