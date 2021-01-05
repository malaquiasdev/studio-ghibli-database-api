const createDynamodbInstance = require('../../infrastructure/orm/dynamodb');
const config = require('../../infrastructure/config');
const contentsSchema = require('./schema');

const ContentsModel = createDynamodbInstance(
  config.DYNAMODB.TABLE_NAMES.CONTENTS,
  contentsSchema,
);

module.exports = ContentsModel;
