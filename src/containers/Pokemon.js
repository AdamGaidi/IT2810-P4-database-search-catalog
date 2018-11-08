import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "components/PokemonItem";
import { bindActionCreators } from "redux";
import { exampleAction } from "../actions/exampleAction";
import connect from "react-redux/es/connect/connect";

const GET_ALL_POKEMON = gql`
  query GetAllPokemon($sortMethod: PokemonOrderByInput) {
    allPokemon(orderBy: $sortMethod) {
      id
      name
      img
      stars
      types
    }
  }
`;

const Pokemon = ({ sortMethod }) => {
  const sortingMethods = {
    alphabetical: "name_ASC",
    reversealphabetical: "name_DESC",
    popularity: "stars_ASC"
  };

  return (
    <Query
      query={GET_ALL_POKEMON}
      variables={{ sortMethod: sortingMethods[sortMethod] }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error :(</p>;

        return data.allPokemon.map(({ name, types, stars, img, id }, i) => (
          <PokemonItem
            id={id}
            key={id}
            src={img}
            stars={stars}
            hasStarred={false}
            name={name}
            types={types}
          />
        ));
      }}
    </Query>
  );
};

//--Redux--//
const mapStateToProps = state => {
  return {
    sortMethod: state.form.searchForm.values.sort
  };
};

export default connect(mapStateToProps)(Pokemon);
