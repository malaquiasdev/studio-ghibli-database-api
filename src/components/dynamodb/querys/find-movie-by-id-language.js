const { dynamoDB } = require('../utils/aws-dynamodb');
const convertRecordsToObject = require('../utils/convert-records-to-object');

async function findMovieByIdAndLanguage(tableName, id, language) {
  const statement = `SELECT * FROM "${tableName}" WHERE "id" = '${id}' and "language" = '${language}'`;
  const { Items } = await dynamoDB.executeStatement({ Statement: statement }).promise();
  return convertRecordsToObject(Items);
}

module.exports = findMovieByIdAndLanguage;
