const { dynamoDBClient } = require('../../utils/aws-dynamodb');
const saveNewItem = require('../save-item');

describe('# Components - DynamoDB - querys - saveNewItem', () => {
  it('should return a filled array with movies', async () => {
    jest.spyOn(dynamoDBClient, 'put').mockReturnValueOnce({
      promise: jest.fn().mockResolvedValueOnce({}),
    });
    const mockedData = {
      id: '0538d482-b63d-4463-a1d0-acd575ad0fea',
      type: 'movie',
      title: 'When Marnie Was There',
    };
    const movies = await saveNewItem('moviesTable', mockedData);
    expect(movies).toMatchObject(mockedData);
  });

  it('should throw an error because tableName is required', async () => {
    const error = new Error(`Missing required key 'TableName' in params`);
    error.code = 'MissingRequiredParameter';
    error.time = '2021-04-04T13:44:38.001Z';
    jest.spyOn(dynamoDBClient, 'put').mockReturnValueOnce({
      promise: jest.fn().mockRejectedValueOnce(error),
    });
    const mockedData = {
      id: '0538d482-b63d-4463-a1d0-acd575ad0fea',
      type: 'movie',
      title: 'When Marnie Was There',
    };
    try {
      await saveNewItem('', mockedData);
    } catch (err) {
      expect(err).toMatchObject(error);
    }
  });
});
