import gql from "graphql-tag";

export const STAR_POKEMON = gql`
  mutation StarPokemon($name: String!) {
    starPokemon(name: $name) {
      id
      stars
    }
  }
`;

export const UNSTAR_POKEMON = gql`
  mutation UnStarPokemon($name: String!) {
    unStarPokemon(name: $name) {
      id
      stars
    }
  }
`;
