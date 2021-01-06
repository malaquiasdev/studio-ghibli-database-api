const config = require('../../../infrastructure/config');
const findTitleByLanguage = require('./find-title-by-language');

function serializerContentsData(
  contentsData = [],
  language = config.DEFAULT_LANGUAGE,
) {
  return contentsData.map((content) => {
    return {
      id: content.id,
      title: findTitleByLanguage(content, language),
    };
  });
}

module.exports = serializerContentsData;
