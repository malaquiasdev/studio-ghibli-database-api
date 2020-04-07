const parseTitle = require("./parse_title");
const parsePublishYear = require("./parse_publish_year");
const parseAgeGroup = require("./parse_age_group");
const parseDuration = require("./parse_duration");
const parseGenres = require("./parse_genres");
const parseRatingImdb = require("./parse_rating_imdb");
const parseRatingMetascore = require("./parse_rating_metascore");
const parseDescription = require("./parse_description");

function parseItemContent($, element) {
  return {
    title: parseTitle($, element),
    publishYear: parsePublishYear($, element),
    ageGroup: parseAgeGroup($, element),
    duration: parseDuration($, element),
    genres: parseGenres($, element),
    ratingImdb: parseRatingImdb($, element),
    ratingMetascore: parseRatingMetascore($, element),
    description: parseDescription($, element),
  };
}

module.exports = parseItemContent;
