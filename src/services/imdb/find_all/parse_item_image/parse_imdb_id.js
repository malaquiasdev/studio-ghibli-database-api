function parseImdbID($, element) {
  return $(element).find("div.lister-item-image").attr("data-tconst");
}

module.exports = parseImdbID;
