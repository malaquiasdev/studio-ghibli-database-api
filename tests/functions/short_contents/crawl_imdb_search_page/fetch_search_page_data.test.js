jest.mock("../../../../src/libs/fetch_data");

const cheerio = require("cheerio");
const imdbSearchPageMock = require("../../../mocks/imdb_search_page");
const fetchData = require("../../../../src/libs/fetch_data");
const fetchSearchPageData = require("../../../../src/functions/short_contents/crawl_imdb_search_page/fetch_search_page_data");

describe("# Function: fetchSearchPageData", () => {
  beforeEach(() => {
    fetchData.mockReturnValue(imdbSearchPageMock);
  });

  describe("## SpyON", () => {
    test("### Should call fetchData function once", async () => {
      await fetchSearchPageData();
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    test("### Should call fetchData functin with the correct IMDB search keyword URL", async () => {
      await fetchSearchPageData();
      expect(fetchData).toHaveBeenCalledWith(
        "https://www.imdb.com/search/keyword/?keywords=studio-ghibli&ref_=tt_stry_kw"
      );
    });
  });

  describe("## Smoke", () => {
    test("### Should return the correct data from Promise", async () => {
      const res = await fetchSearchPageData();
      expect(res).toBeTruthy();
    });
  });
});
