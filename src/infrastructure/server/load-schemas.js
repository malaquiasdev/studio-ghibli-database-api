const path = require('path');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFiles } = require('@graphql-tools/load-files');

async function loadTypeDefs() {
  const dir = path.join(__dirname, '../../interfaces/schemas');
  const typesArray = await loadFiles(dir, {
    extensions: ['graphql'],
  });

  return mergeTypeDefs(typesArray, { all: true });
}

module.exports = loadTypeDefs;
