function findGenresByLanguage(content, language) {
  return content.genres.reduce((acc, genre) => {
    const response = genre.list
      .filter((object) => {
        return object.key.toLowerCase() === language.toLowerCase();
      })
      .map((object) => object.value);
    if (response) {
      acc.push(...response);
    }
    return acc;
  }, []);
}

module.exports = findGenresByLanguage;
