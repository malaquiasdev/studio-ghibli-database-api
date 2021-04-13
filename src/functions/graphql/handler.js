const { ApolloServer } = require('apollo-server-lambda');
const config = require('./config');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const findMoviesByLanguage = require('../../components/dynamodb/querys/find-movies-by-language');
const findMovieByIdAndLanguage = require('../../components/dynamodb/querys/find-movie-by-id-language');

require('dotenv/config');

const server = new ApolloServer({
  playground: {
    endpoint: '/dev/ghiblidb/graphql',
  },
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      config,
      findMoviesByLanguage,
      findMovieByIdAndLanguage,
    };
  },
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
