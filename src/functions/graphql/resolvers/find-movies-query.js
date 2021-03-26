async function findMoviesQuery(_, { language = 'en-US' }, { dataSources }) {
  return dataSources.findMovies({
    tableName: dataSources.config.tableName,
    language,
  });
}
module.exports = findMoviesQuery;
