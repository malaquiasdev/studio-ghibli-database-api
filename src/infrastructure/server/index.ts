import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
}).catch(error => console.log('error', error));