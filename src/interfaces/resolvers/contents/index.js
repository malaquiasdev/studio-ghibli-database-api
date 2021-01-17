const getAllContents = require('../../../use-cases/get-all-contents');
const serializerContentsData = require('../../serializers/contents');

async function getAllContentsResolver(
  _,
  { language = 'en-us' },
  { dataSources },
) {
  const contentsData = await getAllContents({
    ContentsModel: dataSources.ContentsModel,
  });
  return serializerContentsData(contentsData, language);
}

module.exports = {
  AllowedLanguage: {
    JA: 'ja',
    PT_BR: 'pt-br',
    EN_US: 'en-us',
  },
  AllowedType: {
    MOVIE: 'movie',
    TV_SHOW: 'tv show',
    DOCUMENTARY: 'documentary',
    GAME: 'game',
  },
  Query: {
    contents: getAllContentsResolver,
  },
};
