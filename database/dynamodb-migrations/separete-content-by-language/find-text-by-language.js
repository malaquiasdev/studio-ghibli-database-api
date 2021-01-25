function findTextByLanguage(content, language, propertie = 'titles') {
  const result = content[propertie].find((text) => {
    return text.key.toLowerCase() === language.toLowerCase();
  });
  if (result) {
    return result.value;
  }
  return '';
}

module.exports = findTextByLanguage;
