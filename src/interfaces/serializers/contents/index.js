const config = require('../../../infrastructure/config');
const findTextByLanguage = require('./find-text-by-language');
const findGenresByLanguage = require('./find-genres-by-language');

function serializerContentsData(
  contentsData = [],
  language = config.DEFAULT_LANGUAGE,
) {
  return contentsData.map((content) => {
    return {
      id: content.id,
      title: findTextByLanguage(content, language, 'titles'),
      homepage: content.homepage,
      budget: Number(content.budget),
      descriptions: findTextByLanguage(content, language, 'descriptions'),
      cast: content.cast,
      crew: content.crew,
      genres: findGenresByLanguage(content, language),
      images: content.images,
      ratings: content.ratings,
      releaseYear: content.releaseYear,
      revenue: Number(content.revenue),
      runTime: Number(content.runTime),
      originalLanguage: content.originalLanguage,
    };
  });
}

module.exports = serializerContentsData;
