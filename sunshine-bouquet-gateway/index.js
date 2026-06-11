const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { IntrospectAndCompose } = require('@apollo/gateway');

const gateway = new IntrospectAndCompose({
  subgraphs: [
    { name: 'orders', url: 'http://backend:8080/graphql' }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Gateway ready at ${url}`);
});