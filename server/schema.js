import { gql } from "apollo-server-express";
import _, { find } from "lodash";

// Mock data
// const pokemon = [
//   {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["grass", "poison"],
//     img: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
//     stars: 4
//   },
//   {
//     id: 2,
//     name: "Charmander",
//     types: ["fire"],
//     img: "https://img.pokemondb.net/artwork/charmander.jpg",
//     stars: 9
//   },
//   {
//     id: 3,
//     name: "Pikachu",
//     types: ["electric"],
//     img: "https://img.pokemondb.net/artwork/pikachu.jpg",
//     stars: 11
//   }
// ];

export const typeDefs = gql`
  enum Type {
    bug
    dark
    dragon
    electric
    fairy
    fighting
    fire
    flying
    ghost
    grass
    ground
    ice
    normal
    poison
    psychic
    rock
    steel
    water
  }

  type Pokemon {
    id: ID!
    name: String!
    types: [Type!]!
    img: String!
    stars: Int!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    allPokemon(searchString: String): [Pokemon]!
    pokemon(id: ID!): Pokemon
  }

  type Mutation {
    createPokemon(name: String!, img: String!, types: [Type!]!): Pokemon!
  }
`;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers = {
  Query: {
    allPokemon: (root, args, context, info) => {
      const where = args.searchString
        ? {
            name_contains: args.searchString
          }
        : {};

      return context.db.query.pokemons({ where }, info);
    },
    // Gets a pokemon from db based on id.
    pokemon: (root, args, context, info) => {
      return context.db.query.pokemon(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    }
  },

  Mutation: {
    createPokemon: (root, args, context, info) => {
      return context.db.mutation.createPokemon(
        {
          data: {
            name: args.name,
            types: { set: args.types },
            stars: 0,
            img: args.img
          }
        },
        info
      );
    }
  }
};
