const loadContents = require('../index');

describe('# Functions - Dynamodb Migrations - loadContents', () => {
  it('should be a function', async () => {
    expect(typeof loadContents).toBe('function');
  });
});
