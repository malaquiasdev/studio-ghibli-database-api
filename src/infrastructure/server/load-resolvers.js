const path = require('path');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFiles } = require('@graphql-tools/load-files');

async function loadResolvers() {
  const resolversArray = await loadFiles(
    path.join(__dirname, '../../interfaces/resolvers/**/index.js'),
  );

  return mergeResolvers(resolversArray);
}

module.exports = loadResolvers;
