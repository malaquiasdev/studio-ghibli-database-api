const getAllContents = require('../../../use-cases/get-all-contents');
const serializerContentsData = require('../../serializers/contents');

async function getAllContentsResolver(_, __, { dataSources }) {
  const contentsData = await getAllContents({
    ContentsModel: dataSources.ContentsModel,
  });
  return serializerContentsData(contentsData);
}

module.exports = getAllContentsResolver;
