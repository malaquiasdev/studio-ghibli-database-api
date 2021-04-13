const findMoviesQuery = require('./find-movies-query');
const findMovieQuery = require('./find-movie-query');

const resolser = {
  AllowedLanguage: {
    JA: 'ja',
    PT_BR: 'pt-BR',
    EN_US: 'en-US',
  },
  AllowedType: {
    MOVIE: 'movie',
    TV_SHOW: 'tv show',
    DOCUMENTARY: 'documentary',
    GAME: 'game',
  },
  Query: {
    movies: findMoviesQuery,
    movie: findMovieQuery,
  },
};

module.exports = resolser;
