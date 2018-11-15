import gql from "graphql-tag";

export const GET_ALL_POKEMON = gql`
  query GetAllPokemon(
    $sortMethod: PokemonOrderByInput
    $selectedFilters: [Type!]
    $searchString: String
    $offset: Int
    $limit: Int
  ) {
    allPokemon(
      orderBy: $sortMethod
      filterByType: $selectedFilters
      searchString: $searchString
      offset: $offset
      limit: $limit
    ) {
      id
      name
      img
      stars
      types
      number
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      attack
      defense
      HP
      sp_atk
      sp_def
      speed
    }
  }
`;
