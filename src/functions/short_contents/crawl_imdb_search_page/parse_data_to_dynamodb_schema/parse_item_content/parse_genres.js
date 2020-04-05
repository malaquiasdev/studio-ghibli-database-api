function parseGenres($, element) {
  const genre = $(element).find("span.genre").text().trim();
  return genre.split(",");
}

module.exports = parseGenres;
