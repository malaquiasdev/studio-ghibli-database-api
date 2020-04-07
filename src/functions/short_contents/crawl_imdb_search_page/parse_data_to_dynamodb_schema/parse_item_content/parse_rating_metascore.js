const DEFAULT_RATING_ZERO = 0;

function parseRatingMetascore($, element) {
  const rating = $(element).find("span.metascore").text();
  if (!rating) {
    return DEFAULT_RATING_ZERO;
  }
  return parseFloat(rating.replace(",", "."));
}

module.exports = parseRatingMetascore;
