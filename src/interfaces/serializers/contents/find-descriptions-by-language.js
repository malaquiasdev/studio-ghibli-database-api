function findDescriptionByLanguage(content, language) {
  const result = content.descriptions.find((description) => {
    return description.key.toLowerCase() === language;
  });
  if (result) {
    return result.value;
  }
  return '';
}

module.exports = findDescriptionByLanguage;
