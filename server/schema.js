import { gql } from "apollo-server-express";

const pokemon = [
  {
    name: "Bulbasaur",
    type: "grass"
  },
  {
    name: "Pikachu",
    type: "electric"
  }
];

export const typeDefs = gql`
  type Pokemon {
    name: String!
    type: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    pokemon: [Pokemon]
  }
`;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers = {
  Query: {
    pokemon: () => pokemon
  }
};
