/* eslint-disable max-lines */
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    contents(language: String): [Contents]!
  }
  type Contents {
    id: String!
    title: String!
    budget: Int
    descriptions: String!
    cast: [Cast]
    crew: [Crew]
    genres: [String]
    originalLanguage: originalLanguage
    ratings: [Ratings]
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