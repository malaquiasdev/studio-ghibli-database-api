function parsePosterURL($, element) {
  return $(element).find("img.loadlate").attr("loadlate");
}

module.exports = parsePosterURL;
