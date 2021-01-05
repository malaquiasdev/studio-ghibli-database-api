const getStage = require('./stage');
const getDynamoDBConfig = require('./dynamodb');

module.exports = {
  PORT: Number(process.env.PORT || 8080),
  STAGE: getStage(),
  DYNAMODB: getDynamoDBConfig(),
};
