const DEFAULT_RATING_ZERO = 0;

function parseImdbRating($, element) {
  const rating = $(element)
    .find("div.ratings-bar > div.inline-block")
    .attr("data-value");

  if (!rating) {
    return DEFAULT_RATING_ZERO;
  }
  return parseFloat(rating.replace(",", "."));
}

module.exports = parseImdbRating;
