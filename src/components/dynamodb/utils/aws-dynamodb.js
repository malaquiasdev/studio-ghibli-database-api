const AWS = require('aws-sdk');

module.exports = {
  dynamoDB: new AWS.DynamoDB(),
  dynamoDBClient: new AWS.DynamoDB.DocumentClient(),
  unmarshall: AWS.DynamoDB.Converter.unmarshall,
};
