const schemas = require('../index');

describe('# Functions - GraphQL - schemas', () => {
  it('should be an object', () => {
    expect(schemas).toMatchSnapshot();
  });
});
