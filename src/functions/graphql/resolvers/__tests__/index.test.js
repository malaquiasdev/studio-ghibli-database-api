const resolser = require('../index');
const findMoviesQuery = require('../find-movies-query');

describe('# Functions - GraphQL - resolver', () => {
  it('should be an object', () => {
    expect(typeof resolser).toBe('object');
  });

  it('should have a property called AllowedLanguage', async () => {
    const AllowedLanguage = {
      JA: 'ja',
      PT_BR: 'pt-BR',
      EN_US: 'en-US',
    };
    expect(resolser).toHaveProperty('AllowedLanguage');
    expect(resolser.AllowedLanguage).toMatchObject(AllowedLanguage);
  });

  it('should have a property called AllowedType', async () => {
    const AllowedType = {
      MOVIE: 'movie',
      TV_SHOW: 'tv show',
      DOCUMENTARY: 'documentary',
      GAME: 'game',
    };
    expect(resolser).toHaveProperty('AllowedType');
    expect(resolser.AllowedType).toMatchObject(AllowedType);
  });

  it('should have a property called Query', async () => {
    const Query = {
      movies: findMoviesQuery,
    };
    expect(resolser).toHaveProperty('Query');
    expect(resolser.Query).toMatchObject(Query);
  });
});
