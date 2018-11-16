import { gql } from "apollo-server-express";

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
    starPokemon(name: String): Pokemon
    unStarPokemon(name: String): Pokemon
  }
`;

// Resolvers define the technique for fetching the types in the schema.
export const resolvers = {
  Query: {
    // Gets all pokemon matching the search criteria, then filters and orders the result.
    // Returns pagination, so that not all are loaded at once.
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
    // Creates a pokemon based on input
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
    // Deletes pokemon by name
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
    // Increments the star count of the pokemon by name
    starPokemon: async (root, args, context, info) => {
      const data = await context.db.query.pokemon({
        where: {
          name: args.name
        },
        info
      });
      return context.db.mutation.updatePokemon(
        {
          data: {
            stars: data.stars + 1
          },
          where: {
            name: args.name
          }
        },
        info
      );
    },
    // Decrements the star count of the pokemon by name
    unStarPokemon: async (root, args, context, info) => {
      const data = await context.db.query.pokemon({
        where: {
          name: args.name
        },
        info
      });
      return context.db.mutation.updatePokemon(
        {
          data: {
            stars: data.stars - 1
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

/*
args: 
pokemonCollection: Contains sorted set of all currently fetched pokémon. 
selectedFilters: Collection of all the filters selected in the frontend client.

This function is an extension of the backend API. It takes in the selected filters and a collection to determine the next
set of data to return to the caller by removing data which does not match the filters. 
*/
function filterPokemonType(pokemonCollection, selectedFilters) {
  // If length === 0 or undefined => all types are selected
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

/*
args: 
pokemonCollection: Contains sorted set of all currently fetched pokémon. 
Offset: Int - Determines startindex for fetching
limit: Int - Determines how many elements to fetch

This function is an extension of the backend API. It takes in two integers and a collection to determine the next
set of data to return to the caller. The frontend is responsible for tracking which chunk of data to request. 
*/
function pagination(pokemonCollection, offset, limit) {
  if (pokemonCollection == null) {
    return pokemonCollection;
  } else if (offset <= pokemonCollection.length) {
    var paginatedPokemonCollection = [];
    for (let i = 0; i <= limit - 1; i++) {
      if (pokemonCollection[offset + i]) {
        paginatedPokemonCollection.push(pokemonCollection[offset + i]);
      }
    }

    return paginatedPokemonCollection;
  }

  return null;
}
