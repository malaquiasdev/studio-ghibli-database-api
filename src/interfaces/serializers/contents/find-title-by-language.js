function findTitleByLanguage(content, language) {
  const result = content.titles.find((title) => {
    return title.key.toLowerCase() === language;
  });
  if (result) {
    return result.value;
  }
  return '';
}

module.exports = findTitleByLanguage;
