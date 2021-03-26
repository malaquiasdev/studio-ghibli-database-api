/* eslint-disable max-lines */
const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    "Get full metadata from all the movies"
    movies(language: AllowedLanguage): [Movie]! @cacheControl(maxAge: 500)
  }

  "A ISO 639-1 value to display translated data for the fields that support it. Default value is en-US"
  enum AllowedLanguage {
    "Japanese"
    JA
    "Portuguese (Brazil)"
    PT_BR
    "English (United States)"
    EN_US
  }

  enum AllowedType {
    "movie"
    MOVIE
    "tv show"
    TV_SHOW
    "documentary"
    DOCUMENTARY
    "game"
    GAME
  }

  type Movie {
    id: String!
    title: String!
    budget: Int
    description: String!
    cast: [Cast]
    crew: [Crew]
    genres: [String]
    originalLanguage: originalLanguage
    ratings: [Rating]
    releaseYear: String
    revenue: Int
    runTime: Int
  }

  type Cast {
    characterName: String!
    name: String!
    order: String!
    role: String!
  }

  type Crew {
    name: String!
    order: String!
    role: String!
  }

  type Image {
    category: String!
    height: Int!
    width: String!
    orientation: String!
    ratio: String!
    text: String!
    url: String!
  }

  type originalLanguage {
    iso6391: String!
    name: String!
  }

  type Rating {
    key: String!
    value: String!
  }
`;

module.exports = typeDefs;
