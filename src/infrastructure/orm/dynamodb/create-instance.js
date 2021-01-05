const dynamoose = require('dynamoose');

const TABLE_NAME = 'STUDIO-GHIBLI-CONTENTS';

function createDynamodbInstance(tableName = TABLE_NAME, schema) {
  return dynamoose.model(tableName, schema);
}

module.exports = createDynamodbInstance;
