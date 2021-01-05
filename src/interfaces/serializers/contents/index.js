const config = require('../../../infrastructure/config');

function serializerContentsData(
  contentsData = [],
  language = config.DEFAULT_LANGUAGE,
) {
  return contentsData.map((content) => {
    return {
      id: content.id,
      title: content.titles.find((title) => title.toLowerCase() === language),
    };
  });
}

module.exports = serializerContentsData;
