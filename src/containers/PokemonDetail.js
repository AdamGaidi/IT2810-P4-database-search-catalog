import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonDetailItem from "components/PokemonDetailItem";

const GET_POKEMON = gql`
  query GetPokemon($id: ID!) {
    pokemon(id: $id) {
      name
      img
      stars
      types
    }
  }
`;

const PokemonDetail = () => (
  // The id is hardcoded to be bulbasaur for development
  <Query query={GET_POKEMON} variables={{ id: "cjo34lejh000e0c19nrtl4jbe" }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error :(</p>;

      const { img, stars, name, types } = data.pokemon;
      return (
        <PokemonDetailItem
          src={img}
          stars={stars}
          hasStarred={false}
          name={name}
          types={types}
        />
      );
    }}
  </Query>
);
export default PokemonDetail;
