import express from "express";
import { typeDefs, resolvers } from "./schema.js";
import { ApolloServer } from "apollo-server-express";

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
const app = express();
server.applyMiddleware({ app });

// This `listen` method launches a web-server.
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
