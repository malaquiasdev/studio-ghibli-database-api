function parseGenres($, element) {
  const genre = $(element).find("span.genre").text().trim();

  if (!genre) {
    return null;
  }

  return genre.split(",");
}

module.exports = parseGenres;
