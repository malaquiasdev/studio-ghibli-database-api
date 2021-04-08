async function findMoviesQuery(_, { language = 'en-US' }, { dataSources }) {
  return dataSources.findMoviesByLanguage({
    tableName: dataSources.config.moviesTableName,
    language,
  });
}
module.exports = findMoviesQuery;
