const getSearchPageData = require("./get_search_page_data");
const parseItemImage = require("./parse_item_image");
const parseItemContent = require("./parse_item_content");

async function findAll() {
  const $ = await getSearchPageData();
  const shortContent = [];

  $("div.lister-item").each((_, element) => {
    const itemImage = parseItemImage($, element);
    const itemContent = parseItemContent($, element);
    const newShortContent = {
      id: "0",
      imdbID: itemImage.imdbID,
      posterURL: itemImage.posterURL,
      title: itemContent.title,
      publishYear: itemContent.publishYear,
      ageGroup: itemContent.ageGroup,
      duration: itemContent.duration,
      genres: itemContent.genres,
      imdbRating: itemContent.imdbRating,
      description: itemContent.description,
    };
    shortContent.push(newShortContent);
  });

  return shortContent;
}

module.exports = findAll;
