const fetchData = require("../../../libs/fetch_data");
const Config = require("../../../config");

const SUFFIX_URL = "search/keyword/?keywords=";
const SUFFIX_REF = "&ref_=tt_stry_kw";

async function fetchSearchPageData() {
  const { IMDB } = Config;
  return fetchData(
    `${IMDB.BASE_URL}${SUFFIX_URL}${IMDB.BASE_KEYWORD}${SUFFIX_REF}`
  );
}

module.exports = fetchSearchPageData;
