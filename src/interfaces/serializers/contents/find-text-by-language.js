function findTextByLanguage(content, language = 'en-us', propertie = 'titles') {
  const result = content[propertie].find((text) => {
    return text.key.toLowerCase() === language;
  });
  if (result) {
    return result.value;
  }
  return '';
}

module.exports = findTextByLanguage;
