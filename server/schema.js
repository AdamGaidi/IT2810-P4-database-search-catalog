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

  enum PokemonOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    number_ASC
    number_DESC
    stars_ASC
    stars_DESC
    attack_ASC
    attack_DESC
    defense_ASC
    defense_DESC
    HP_ASC
    HP_DESC
    sp_atk_ASC
    sp_atk_DESC
    sp_def_ASC
    sp_def_DESC
    speed_ASC
    speed_DESC
    img_ASC
    img_DESC
    updatedAt_ASC
    updatedAt_DESC
    createdAt_ASC
    createdAt_DESC
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
    allPokemon(
      searchString: String
      orderBy: PokemonOrderByInput
      filterByType: [Type!]
      offset: Int
      limit: Int
    ): [Pokemon]!
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
  }
`;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers = {
  Query: {
    allPokemon: async (root, args, context, info) => {
      const where = args.searchString
        ? {
            name_contains: args.searchString
          }
        : {};
      const data = await context.db.query.pokemons(
        { where, orderBy: args.orderBy },
        info
      );

      return pagination(
        filterPokemonType(data, args.filterByType),
        args.offset,
        args.limit
      );
      /*
      return pagination(
        filterPokemonType(data, args.filterByType),
        args.skip,
        args.first
      );*/
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
    }
  }
};

function filterPokemonType(pokemonCollection, selectedFilters) {
  //If length === 0 or undefined all types are selected
  if (selectedFilters == null || Object.keys(selectedFilters).length === 0) {
    return pokemonCollection;
  }

  const modifiedPokemonCollection = pokemonCollection.filter(pokemon => {
    for (let i = 0; i <= selectedFilters.length; i++) {
      if (pokemon.types.includes(selectedFilters[i])) {
        return true;
      }
    }
  });

  return modifiedPokemonCollection;
}

function pagination(pokemonCollection, offset, limit) {
  if (pokemonCollection == null) {
    console.log("POKEMONCOLLECTION == NULL");
    return pokemonCollection;
  } else if (offset <= pokemonCollection.length) {
    var paginatedPokemonCollection = [];
    for (let i = 0; i <= limit - 1; i++) {
      if (pokemonCollection[offset + i]) {
        paginatedPokemonCollection.push(pokemonCollection[offset + i]);
      }
    }
    /*
    const paginatedPokemonCollection = pokemonCollection.filter(() => {
      for (let i = 0; i <= limit; i++) {
        if (pokemonCollection[offset + i]) {
          console.log("paginatedPokemonCollection");
          return true;
        }
      }
    });*/
    console.log(paginatedPokemonCollection);
    return paginatedPokemonCollection;
  }

  return null;
}
