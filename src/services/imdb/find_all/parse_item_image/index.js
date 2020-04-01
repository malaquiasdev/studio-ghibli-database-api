const parsePosterURL = require("./parse_poster_url");
const parseImdbID = require("./parse_imdb_id");

function parseItemImage($, element) {
  return {
    imdbID: parseImdbID($, element),
    posterURL: parsePosterURL($, element),
  };
}

module.exports = parseItemImage;
