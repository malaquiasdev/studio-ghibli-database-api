async function findAllContentsResolver(
  _,
  { language = 'en-US' },
  { dataSources },
) {
  console.log('findContentsByLanguage', dataSources);
  return dataSources.findContentsByLanguage('STUDIO-GHIBLI-CONTENTS', language);
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
