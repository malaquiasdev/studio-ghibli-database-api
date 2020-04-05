jest.mock(
  "../../../../src/functions/short_contents/crawl_imdb_search_page/fetch_search_page_data"
);

jest.mock(
  "../../../../src/functions/short_contents/crawl_imdb_search_page/parse_data_to_dynamodb_schema"
);

const imdbSearchPageMock = require("../../../mocks/imdb_search_page");
const response = require("../../../../src/libs/response");
const fetchSearchPageData = require("../../../../src/functions/short_contents/crawl_imdb_search_page/fetch_search_page_data");
const parseDataToDynamodbSchema = require("../../../../src/functions/short_contents/crawl_imdb_search_page/parse_data_to_dynamodb_schema");

const crawlImdbSearchPage = require("../../../../src/functions/short_contents/crawl_imdb_search_page");

let ShortContentsModel = null;

describe("# Function: crawlImdbSearchPage", () => {
  beforeEach(() => {
    fetchSearchPageData.mockReturnValue(imdbSearchPageMock);

    ShortContentsModel = {
      batchPut: jest.fn().mockReturnValue(true),
    };

    parseDataToDynamodbSchema.mockRestore();
  });

  describe("## SpyON", () => {
    test("## Should call fetchSearchPageData function once", async () => {
      await crawlImdbSearchPage(response, ShortContentsModel);
      expect(fetchSearchPageData).toHaveBeenCalledTimes(1);
    });

    test("## Should call parseDataToDynamodbSchema function once", async () => {
      await crawlImdbSearchPage(response, ShortContentsModel);
      expect(parseDataToDynamodbSchema).toHaveBeenCalledTimes(1);
    });

    test("## Should call ShortContentsModel.batchPut function once", async () => {
      await crawlImdbSearchPage(response, ShortContentsModel);
      expect(ShortContentsModel.batchPut).toHaveBeenCalledTimes(1);
    });
  });

  /* test("## Should return a array that contains the studio-ghibli short contents", async () => {
    const response = await findAll();
    expect(response).toBeInstanceOf(Array);
    expect(response[0].id).not.toBe("");
    expect(response[0].imdbID).not.toBe("");
    expect(response[0].posterURL).not.toBe("");
    expect(response[0].title).not.toBe("");
    expect(response[0].publishYear).not.toBe(0);
    expect(response[0].ageGroup).not.toBe("");
    expect(response[0].duration).not.toBe("");
    expect(response[0].genres).not.toBe([""]);
    expect(response[0].imdbRating).not.toBe(0);
  }); */
});
