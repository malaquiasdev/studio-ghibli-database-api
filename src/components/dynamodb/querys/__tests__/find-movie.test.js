const { dynamoDB } = require('../../utils/aws-dynamodb');
const findMovieByIdAndLanguage = require('../find-movie-by-id-language');
const dynamoDBMoviesItemsMock = require('./__mocks__/totoro-movie.mock.json');

describe('# Components - DynamoDB - querys - findMovieByIdAndLanguage', () => {
  it('should return a filled array with movies', async () => {
    jest.spyOn(dynamoDB, 'executeStatement').mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce(dynamoDBMoviesItemsMock),
    });
    const movies = await findMovieByIdAndLanguage('moviesTable', 'MV03222', 'en-US');
    expect(movies).toMatchSnapshot();
  });

  it('should return an empty array', async () => {
    jest.spyOn(dynamoDB, 'executeStatement').mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce({ Items: [] }),
    });
    const movies = await findMovieByIdAndLanguage('moviesTable', 'MV03222', 'en-US');
    expect(movies.length).toEqual(0);
  });
});
