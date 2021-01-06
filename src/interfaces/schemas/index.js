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
  }
`;

module.exports = typeDefs;
