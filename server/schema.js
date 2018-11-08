import { gql } from "apollo-server-express";
import _, { find } from "lodash";

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
    number: String!
    stars: Int!
    attack: Int!
    defense: Int!
    HP: Int!
    sp_atk: Int!
    sp_def: Int!
    speed: Int!
    img: String!
    types: [Type!]!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    allPokemon(searchString: String): [Pokemon]!
    pokemon(name: String!): Pokemon
  }

  type Mutation {
    createPokemon(
      name: String!
      number: String!
      stars: Int!
      attack: Int!
      defense: Int!
      HP: Int!
      sp_atk: Int!
      sp_def: Int!
      speed: Int!
      img: String!
      types: [Type!]!
    ): Pokemon!
    deletePokemon(name: String): Pokemon
    starPokemon(name: String, stars: Int): Pokemon
    unStarPokemon(name: String, stars: Int): Pokemon
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
    // Gets a pokemon from db based on name.
    pokemon: (root, args, context, info) => {
      return context.db.query.pokemon(
        {
          where: {
            name: args.name
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
            number: args.number,
            stars: args.stars,
            attack: args.attack,
            defense: args.defense,
            HP: args.HP,
            sp_atk: args.sp_atk,
            sp_def: args.sp_def,
            speed: args.speed,
            img: args.img,
            types: { set: args.types }
          }
        },
        info
      );
    },
    deletePokemon: (root, args, context, info) => {
      return context.db.mutation.deletePokemon(
        {
          where: {
            name: args.name
          }
        },
        info
      );
    },
    starPokemon: (root, args, context, info) => {
      return context.db.mutation.updatePokemon(
        {
          data: {
            stars: args.stars + 1
          },
          where: {
            name: args.name
          }
        },
        info
      );
    },
    unStarPokemon: (root, args, context, info) => {
      return context.db.mutation.updatePokemon(
        {
          data: {
            stars: args.stars - 1
          },
          where: {
            name: args.name
          }
        },
        info
      );
    }
  }
};
