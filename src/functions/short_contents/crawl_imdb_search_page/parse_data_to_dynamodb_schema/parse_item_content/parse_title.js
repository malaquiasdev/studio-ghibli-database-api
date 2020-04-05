function parseTitle($, element) {
  return $(element).find("h3.lister-item-header > a").text();
}

module.exports = parseTitle;
