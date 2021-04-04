const { unmarshall } = require('./aws-dynamodb');

function convertArray(data) {
  return data.map((item) => unmarshall(item));
}

function convertRecordsToObject(data) {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return convertArray(data);
  }
  return unmarshall(data);
}

module.exports = convertRecordsToObject;
