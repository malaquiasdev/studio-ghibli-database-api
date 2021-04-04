const { dynamoDBClient } = require('../utils/aws-dynamodb');
const { logError } = require('../../logger');

async function saveNewItem(tableName, data) {
  const params = {
    TableName: tableName,
    Item: {
      ...data,
    },
  };
  try {
    await dynamoDBClient.put(params).promise();
    return data;
  } catch (error) {
    logError({ message: error.message, params: { error } });
    throw error;
  }
}

module.exports = saveNewItem;
