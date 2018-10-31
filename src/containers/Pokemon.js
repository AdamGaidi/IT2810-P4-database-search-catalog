import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "components/PokemonItem";

const GET_ALL_POKEMON = gql`
  query GetAllPokemon {
    allPokemon {
      name
      src
      stars
      types
    }
  }
`;
const Pokemon = () => (
  <Query query={GET_ALL_POKEMON}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error :(</p>;

      return data.allPokemon.map(({ name, types, stars, src }, i) => (
        <PokemonItem
          key={name + i}
          src={src}
          stars={stars}
          hasStarred={false}
          name={name}
          types={types}
        />
      ));
    }}
  </Query>
);
export default Pokemon;
