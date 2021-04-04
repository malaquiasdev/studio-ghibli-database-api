async function findMoviesQuery(_, { language = 'en-US' }, { dataSources }) {
  return dataSources.findMovies({
    tableName: dataSources.config.moviesTableName,
    language,
  });
}
module.exports = findMoviesQuery;
