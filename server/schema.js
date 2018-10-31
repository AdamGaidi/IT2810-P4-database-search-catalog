import { gql } from "apollo-server-express";
import _, { find } from "lodash";

const pokemon = [
  {
    name: "Bulbasaur",
    types: ["grass", "poison"],
    src: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    stars: 4
  },
  {
    name: "Charmander",
    types: ["fire"],
    src: "https://img.pokemondb.net/artwork/charmander.jpg",
    stars: 9
  },
  {
    name: "Pikachu",
    types: ["electric"],
    src: "https://img.pokemondb.net/artwork/pikachu.jpg",
    stars: 11
  }
];

export const typeDefs = gql`
  type Pokemon {
    name: String!
    types: [String!]!
    src: String!
    stars: Int!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    allPokemon: [Pokemon]
    pokemon(name: String): Pokemon
  }
`;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers = {
  Query: {
    allPokemon: () => pokemon,
    pokemon: (root, args, context, info) => {
      return find(pokemon, { name: _.capitalize(args.name) });
    }
  }
};
