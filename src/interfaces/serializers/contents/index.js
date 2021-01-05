const config = require('../../../infrastructure/config');
const findTitleByLanguage = require('./find-title-by-language');

function serializerContentsData(
  contentsData = [],
  language = config.DEFAULT_LANGUAGE,
) {
  const x = contentsData.map((content) => {
    return {
      id: content.id,
      title: findTitleByLanguage(content, language),
    };
  });
  console.log('x', x);
  return x;
}

module.exports = serializerContentsData;
