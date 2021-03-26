/* eslint-disable no-restricted-syntax */
const uuid = require('uuid');
const findTextByLanguage = require('./find-text-by-language');
const findGenresByLanguage = require('./find-genres-by-language');

function separateContentByLanguage(rawContents = []) {
  const contents = [];
  for (const content of rawContents) {
    const { languageKeys } = content;
    for (const language of languageKeys) {
      const newContent = {
        id: uuid.v4(),
        contentId: content.id,
        budget: content.budget,
        revenue: content.revenue,
        releaseYear: content.releaseYear,
        runTime: content.runTime,
        type: content.type,
        language,
        originalLanguage: content.originalLanguage,
        cast: content.cast,
        crew: content.crew,
        ratings: content.ratings,
        title: findTextByLanguage(content, language, 'titles'),
        description: findTextByLanguage(content, language, 'descriptions'),
        genres: findGenresByLanguage(content, language),
      };
      contents.push(newContent);
    }
  }
  return contents;
}

module.exports = separateContentByLanguage;
