require('dotenv/config');

const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('../../interfaces/schemas');
const resolvers = require('../../interfaces/resolvers');
const dataSources = require('../../models');

const server = new ApolloServer({
  playground: {
    endpoint: '/dev/ghiblidb/graphql',
  },
  typeDefs,
  resolvers,
  dataSources,
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
