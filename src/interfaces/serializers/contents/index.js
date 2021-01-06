const config = require('../../../infrastructure/config');
const findTextByLanguage = require('./find-text-by-language');

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
    };
  });
}

module.exports = serializerContentsData;
