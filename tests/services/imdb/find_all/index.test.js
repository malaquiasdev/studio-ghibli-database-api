jest.mock('../../../../src/libs/fetch_data');

const imdbSearchPageMock = require('../../../mocks/imdb_search_page');
const fetchData = require('../../../../src/libs/fetch_data');
const findAll = require('../../../../src/services/imdb/find_all');

describe('', () => {
    beforeEach(() => {
        fetchData.mockReturnValue(imdbSearchPageMock)
    });
    test('## Should return a array that contains the studio-ghibli short contents', async () => {
        const response = await findAll();
        expect(response).toBeInstanceOf(Array);
        expect(response[0].id).not.toBe('');
        expect(response[0].imdbID).not.toBe('');
        expect(response[0].posterURL).not.toBe('');
        expect(response[0].title).not.toBe('');
        expect(response[0].publishYear).not.toBe(0);
        expect(response[0].ageGroup).not.toBe('');
        expect(response[0].duration).not.toBe('');
        expect(response[0].genres).not.toBe(['']);
        expect(response[0].imdbRating).not.toBe(0);
    });
});