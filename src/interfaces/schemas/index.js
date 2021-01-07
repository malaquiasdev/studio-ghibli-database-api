/* eslint-disable max-lines */
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    contents: [Contents]!
  }

  type Contents {
    id: String!
    title: String!
    homepage: String
    budget: Int
    descriptions: String!
    cast: [Cast]
    crew: [Crew]
    genres: [String]
    images: [Images]
    originalLanguage: originalLanguage
    ratings: [Ratings]
    releaseYear: String
    revenue: Int
    runTime: Int
  }

  type Cast {
    characterName: String!
    id: String!
    name: String!
    order: String!
    role: String!
  }

  type Crew {
    id: String!
    name: String!
    order: String!
    role: String!
  }

  type Images {
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

  type Ratings {
    key: String!
    value: String!
  }
`;

module.exports = typeDefs;
