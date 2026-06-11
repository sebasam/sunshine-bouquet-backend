const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'orders', url: 'http://backend:8080/graphql' }
    ]
  })
});

const server = new ApolloServer({
  gateway,
});

startStandaloneServer(server, {
  listen: { port: 4000, host: '0.0.0.0' },
}).then(({ url }) => {
  console.log(`Gateway ready at ${url}`);
});