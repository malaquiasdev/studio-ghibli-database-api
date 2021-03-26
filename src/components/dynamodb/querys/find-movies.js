const AWS = require('aws-sdk');
const convertRecordsToObject = require('../utils/convert-records-to-object');

const dynamoDB = new AWS.DynamoDB();

async function findMovies({ tableName, language }) {
  const statement = `SELECT * FROM "${tableName}" WHERE "language" = '${language}'`;
  const { Items } = await dynamoDB
    .executeStatement({ Statement: statement })
    .promise();
  return convertRecordsToObject(Items);
}

module.exports = findMovies;
