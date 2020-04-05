function removeParentheses(year) {
  return year.replace("(", "").replace(")", "");
}

function parsePublishYear($, element) {
  const year = $(element).find("span.lister-item-year").text();
  return removeParentheses(year);
}

module.exports = parsePublishYear;
