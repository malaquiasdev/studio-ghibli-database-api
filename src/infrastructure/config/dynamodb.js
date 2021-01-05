function getDynamoDBConfig() {
  return {
    TABLE_NAMES: {
      CONTENTS: process.env.DYNAMODB_CONTENTS_TABLE_NAME,
    },
  };
}

module.exports = getDynamoDBConfig;
