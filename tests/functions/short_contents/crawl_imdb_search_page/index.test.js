jest.mock(
  "../../../../src/functions/short_contents/crawl_imdb_search_page/fetch_search_page_data"
);

const imdbSearchPageMock = require("../../../mocks/imdb_search_page");
const response = require("../../../../src/libs/response");
const fetchSearchPageData = require("../../../../src/functions/short_contents/crawl_imdb_search_page/fetch_search_page_data");
const crawlImdbSearchPage = require("../../../../src/functions/short_contents/crawl_imdb_search_page");

let ShortContentsModel = null;

describe("# Function: crawlImdbSearchPage", () => {
  beforeEach(() => {
    fetchSearchPageData.mockReturnValue(imdbSearchPageMock);

    ShortContentsModel = {
      batchPut: jest.fn().mockReturnValue(true),
      scan: jest.fn().mockImplementation(() => {
        return {
          exec: jest.fn().mockReturnValue(true),
        };
      }),
      batchDelete: jest.fn().mockReturnValue(true),
    };
  });

  describe("## SpyON", () => {
    test("## Should call fetchSearchPageData function once", async () => {
      await crawlImdbSearchPage(response, ShortContentsModel);
      expect(fetchSearchPageData).toHaveBeenCalledTimes(1);
    });

    test("## Should call ShortContentsModel.batchPut function once", async () => {
      await crawlImdbSearchPage(response, ShortContentsModel);
      expect(ShortContentsModel.batchPut).toHaveBeenCalledTimes(1);
    });
  });

  describe("## Smoke", () => {
    test("### Should return a success response with status code 200, no cache and body with an Array data", async () => {
      const res = await crawlImdbSearchPage(response, ShortContentsModel);
      expect(res).toBeInstanceOf(Object);
      expect(res.body).toBeTruthy();
      expect(res.body).toBeInstanceOf(Array);
      expect(res.statusCode).toBe(200);
      expect(res.headers["Cache-Control"]).toBe(
        "private, max-age=0, no-cache, no-store, must-revalidate"
      );
    });
  });
});
