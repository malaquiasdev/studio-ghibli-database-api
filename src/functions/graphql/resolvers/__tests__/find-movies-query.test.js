const findMoviesQuery = require('../find-movies-query');

describe('# Functions - GraphQL - resolvers - findMoviesQuery', () => {
  it('should be a function', () => {
    expect(typeof findMoviesQuery).toBe('function');
  });

  it('should call dataSources findMovies function', async () => {
    const dataSources = {
      findMovies: jest.fn().mockResolvedValueOnce(true),
      config: {
        moviesTableName: 'moviesTableName',
      },
    };
    await findMoviesQuery(null, {}, { dataSources });
    expect(dataSources.findMovies).toHaveBeenCalledTimes(1);
  });
});
