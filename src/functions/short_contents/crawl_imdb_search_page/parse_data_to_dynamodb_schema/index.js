const uuid = require("uuid");
const parseItemImage = require("./parse_item_image");
const parseItemContent = require("./parse_item_content");

function parseDataToDynamodbSchema(searchPageData) {
  const shortContent = [];

  searchPageData("div.lister-item").each((_, element) => {
    const itemImage = parseItemImage(searchPageData, element);
    const itemContent = parseItemContent(searchPageData, element);
    const newShortContent = {
      id: uuid.v4(),
      imdbID: itemImage.imdbID,
      posterURL: itemImage.posterURL,
      title: itemContent.title,
      publishYear: itemContent.publishYear,
      ageGroup: itemContent.ageGroup,
      duration: itemContent.duration,
      genres: itemContent.genres,
      ratingImdb: itemContent.ratingImdb,
      ratingMetascore: itemContent.ratingMetascore,
      description: itemContent.description,
    };
    shortContent.push(newShortContent);
  });

  return shortContent;
}

module.exports = parseDataToDynamodbSchema;
