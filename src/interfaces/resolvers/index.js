const getAllContentsResolver = require('./contents');

module.exports = {
  Query: {
    contents: getAllContentsResolver,
  },
};
