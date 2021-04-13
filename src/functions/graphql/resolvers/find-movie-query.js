async function findMovieQuery(_, { language = 'en-US', id }, { dataSources }) {
  return dataSources.findMovieByIdAndLanguage(dataSources.config.moviesTableName, id, language);
}

module.exports = findMovieQuery;
