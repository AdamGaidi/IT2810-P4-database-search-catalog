import express from "express";
import { typeDefs, resolvers } from "./schema.js";
import { ApolloServer } from "apollo-server-express";
import { Prisma } from "prisma-binding";

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  // The connection to the database
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "database/generated/prisma.graphql",
      endpoint: "http://localhost:4466",
      debug: true
    })
  })
});

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
