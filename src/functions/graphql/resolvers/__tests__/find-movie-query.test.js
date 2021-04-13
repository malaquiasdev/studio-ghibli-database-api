const findMovieQuery = require('../find-movie-query');

describe('# Functions - GraphQL - resolvers - findMovieQuery', () => {
  it('should be a function', () => {
    expect(typeof findMovieQuery).toBe('function');
  });

  it('should call dataSources findMovieByIdAndLanguage without default value', async () => {
    const dataSources = {
      findMovieByIdAndLanguage: jest.fn().mockResolvedValueOnce(true),
      config: {
        moviesTableName: 'moviesTableName',
      },
    };
    await findMovieQuery(null, { language: 'pt_br', id: 123 }, { dataSources });
    expect(dataSources.findMovieByIdAndLanguage).toHaveBeenCalledWith('moviesTableName', 123, 'pt_br');
  });

  it('should call dataSources findMovieByIdAndLanguage with default value', async () => {
    const dataSources = {
      findMovieByIdAndLanguage: jest.fn().mockResolvedValueOnce(true),
      config: {
        moviesTableName: 'moviesTableName',
      },
    };
    await findMovieQuery(null, { id: 123 }, { dataSources });
    expect(dataSources.findMovieByIdAndLanguage).toHaveBeenCalledWith('moviesTableName', 123, 'en-US');
  });
});
