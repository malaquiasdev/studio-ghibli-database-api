const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
//const dataSources require( '../../models');

require('dotenv/config');

const server = new ApolloServer({
  playground: {
    endpoint: '/dev/ghiblidb/graphql',
  },
  typeDefs,
  resolvers,
  //dataSources,
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
