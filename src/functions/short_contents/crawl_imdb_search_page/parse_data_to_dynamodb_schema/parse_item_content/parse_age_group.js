function parseAgeGroup($, element) {
  const ageGroup = $(element).find("span.certificate").text();
  if (!ageGroup) {
    return null;
  }
  return ageGroup;
}

module.exports = parseAgeGroup;
