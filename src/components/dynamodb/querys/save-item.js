const { dynamoDBClient } = require('../utils/create-dynamodb-instance');

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
