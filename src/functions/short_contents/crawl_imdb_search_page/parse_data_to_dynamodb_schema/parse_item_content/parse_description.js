function parseDescription($, element) {
  const description = $(element)
    .find("p")
    .map((_, e) => {
      if (e.attribs.class === "") {
        return e.children[0];
      }
      return null;
    });
  return description[0].data.trim();
}

module.exports = parseDescription;
