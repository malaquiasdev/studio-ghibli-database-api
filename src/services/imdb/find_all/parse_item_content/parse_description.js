const STRING_EMPTY = "";

function isDescriptionValid(description) {
  return !description[0] && !description[0].data;
}

function parseDescription($, element) {
  const description = $(element)
    .find("p")
    .map((_, e) => {
      if (e.attribs.class === "") {
        return e.children[0];
      }
      return null;
    });
  if (isDescriptionValid(description)) {
    return STRING_EMPTY;
  }
  return description[0].data.trim();
}

module.exports = parseDescription;
