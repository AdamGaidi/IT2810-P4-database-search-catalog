import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonDetailItem from "components/PokemonDetailItem";

const GET_POKEMON = gql`
  query GetPokemon($name: String) {
    pokemon(name: $name) {
      name
      src
      stars
      types
    }
  }
`;

const PokemonDetail = () => (
  <Query query={GET_POKEMON} variables={{ name: "bulbasaur" }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error :(</p>;

      return (
        <PokemonDetailItem
          src={data.pokemon.src}
          stars={data.pokemon.stars}
          hasStarred={data.pokemon.false}
          name={data.pokemon.name}
          types={data.pokemon.types}
        />
      );
    }}
  </Query>
);
export default PokemonDetail;
