const getAllContents = require('../../../use-cases/get-all-contents');
const serializerContentsData = require('../../serializers/contents');

async function getAllContentsResolver(_, { language }, { dataSources }) {
  const contentsData = await getAllContents({
    ContentsModel: dataSources.ContentsModel,
  });
  return serializerContentsData(contentsData, language);
}

module.exports = {
  Query: {
    contents: getAllContentsResolver,
  },
};
