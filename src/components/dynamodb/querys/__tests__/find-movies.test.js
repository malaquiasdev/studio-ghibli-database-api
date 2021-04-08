const { dynamoDB } = require('../../utils/aws-dynamodb');
const findMoviesByLanguage = require('../find-movies-by-language');
const dynamoDBMoviesItemsMock = require('./__mocks__/movies.mock.json');

describe('# Components - DynamoDB - querys - findMoviesByLanguage', () => {
  it('should return a filled array with movies', async () => {
    jest.spyOn(dynamoDB, 'executeStatement').mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce(dynamoDBMoviesItemsMock),
    });
    const movies = await findMoviesByLanguage({
      tableName: 'moviesTable',
      language: 'en-US',
    });
    expect(movies).toMatchSnapshot();
  });

  it('should return an empty array', async () => {
    jest.spyOn(dynamoDB, 'executeStatement').mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce({ Items: [] }),
    });
    const movies = await findMoviesByLanguage({
      tableName: 'moviesTable',
      language: 'en-US',
    });
    expect(movies.length).toEqual(0);
  });
});
