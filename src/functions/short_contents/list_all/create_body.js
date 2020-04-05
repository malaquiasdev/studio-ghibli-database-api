const parseShortContentsModelToContents = require("./parse_short_contents_model_to_contents");

function createBody(res) {
  return {
    contents: parseShortContentsModelToContents(res),
    total: res.length,
  };
}

module.exports = createBody;
