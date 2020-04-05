const deleteOldestData = require("../../../../src/functions/short_contents/crawl_imdb_search_page/delete_oldest_data");

describe("# Function: deleteOldestData", () => {
  beforeEach(() => {
    ShortContentsModel = {
      scan: jest.fn().mockImplementation(() => {
        return {
          exec: jest.fn().mockReturnValue(true),
        };
      }),
      batchDelete: jest.fn().mockReturnValue(true),
    };
  });

  describe("## SpyON", () => {
    test("### Should call ShortContentsModel.scan.exec function once", async () => {
      await deleteOldestData(ShortContentsModel);
      expect(ShortContentsModel.scan).toHaveBeenCalledTimes(1);
    });
    test("### Should call ShortContentsModel.batchDelete function once", async () => {
      await deleteOldestData(ShortContentsModel);
      expect(ShortContentsModel.batchDelete).toHaveBeenCalledTimes(1);
    });
  });

  describe("## Smoke", () => {
    test("### Should return the correct true from the Promise", async () => {
      const res = await deleteOldestData(ShortContentsModel);
      expect(res).toBeTruthy();
    });
  });
});
