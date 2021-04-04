const myNeighborTotoroRaw = require('../../../../../database/movies/my-neighbor-totoro.json');
const totoroWithoutDescriptionJALanguageMock = require('./__mocks__/totoro-without-description-ja-language-mock.json');
const separateContentByLanguage = require('../index');

describe('# Functions - Dynamodb Migrations - separateContentByLanguage', () => {
  it('should be a function', () => {
    expect(typeof separateContentByLanguage).toBe('function');
  });

  it('should return an array as result', () => {
    const emptyArray = separateContentByLanguage();
    expect(Array.isArray(emptyArray)).toBe(true);

    const array = separateContentByLanguage(myNeighborTotoroRaw);
    expect(Array.isArray(array)).toBe(true);
  });

  it('should return all contents that we have inside of the raw file as an array result', () => {
    const array = separateContentByLanguage([myNeighborTotoroRaw]);
    expect(array.length).toBe(3);
    expect(array).toMatchSnapshot();
  });

  it('should return a content with language as empty string because we do not have translation information', () => {
    const array = separateContentByLanguage([
      totoroWithoutDescriptionJALanguageMock,
    ]);
    const totoroJapaneseVersion = array.find(
      (item) => item.title === 'となりのトトロ',
    );
    expect(totoroJapaneseVersion.description).toBe('');
  });
});
