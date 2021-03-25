//const findAllContents = require('../../use-cases/find-all-contents');

async function findAllContentsResolver(
  _,
  { language = 'en-US' },
  { dataSources },
) {
  /*return findAllContents(
    { language },
    {
      ContentsModel: dataSources.ContentsModel,
    },
  );*/
  return { x: 'y' };
}

const resolser = {
  AllowedLanguage: {
    JA: 'ja',
    PT_BR: 'pt-BR',
    EN_US: 'en-US',
  },
  AllowedType: {
    MOVIE: 'movie',
    TV_SHOW: 'tv show',
    DOCUMENTARY: 'documentary',
    GAME: 'game',
  },
  Query: {
    findAllContents: findAllContentsResolver,
  },
};

module.exports = resolser;
