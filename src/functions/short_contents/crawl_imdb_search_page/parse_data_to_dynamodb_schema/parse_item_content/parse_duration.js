function parseDuration($, element) {
  const duration = $(element).find("span.runtime").text();

  if (!duration) {
    return null;
  }

  return duration;
}

module.exports = parseDuration;
