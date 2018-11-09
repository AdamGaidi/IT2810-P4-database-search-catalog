import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "components/PokemonItem";
import { bindActionCreators } from "redux";
import { exampleAction } from "../actions/exampleAction";
import connect from "react-redux/es/connect/connect";

const GET_ALL_POKEMON = gql`
  query GetAllPokemon(
    $sortMethod: PokemonOrderByInput
    $selectedFilters: [Type!]
    $searchString: String
  ) {
    allPokemon(
      orderBy: $sortMethod
      filterByType: $selectedFilters
      searchString: $searchString
    ) {
      id
      name
      img
      stars
      types
    }
  }
`;

const Pokemon = ({ sortMethod, selectedFilters, searchString }) => {
  const sortingMethods = {
    alphabetical: "name_ASC",
    reversealphabetical: "name_DESC",
    popularity: "stars_ASC"
  };

  var filterTypes = Object.keys(selectedFilters).filter(function(key) {
    if (key !== "sort" && key !== "search" && selectedFilters[key] === true) {
      return key;
    }
  });

  console.log(filterTypes);
  console.log(Object.keys(filterTypes).length);
  return (
    <Query
      query={GET_ALL_POKEMON}
      variables={{
        sortMethod: sortingMethods[sortMethod],
        selectedFilters: filterTypes,
        searchString: searchString
      }}
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
    sortMethod: state.form.searchForm.values.sort,
    selectedFilters: state.form.searchForm.values,
    searchString: state.form.searchForm.values.search
  };
};

export default connect(mapStateToProps)(Pokemon);
