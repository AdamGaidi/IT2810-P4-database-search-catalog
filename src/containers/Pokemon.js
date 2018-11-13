import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "components/PokemonItem";
import { bindActionCreators } from "redux";
import { exampleAction } from "../actions/exampleAction";
import connect from "react-redux/es/connect/connect";
import PokemonDetailItem from "components/PokemonDetailItem";
import LoadButton from "components/LoadButton";

const GET_ALL_POKEMON = gql`
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
      skip: $offset
      first: $limit
    ) {
      id
      name
      img
      stars
      types
    }
  }
`;

const GET_POKEMON_DETAILS = gql`
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

const Pokemon = ({
  sortMethod,
  selectedFilters,
  searchString,
  showDetails,
  fetchAmount
}) => {
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

  return (
    <Query
      query={GET_ALL_POKEMON}
      notifyOnNetworkStatusChange={true}
      variables={{
        sortMethod: sortingMethods[sortMethod],
        selectedFilters: filterTypes,
        searchString: searchString,
        offset: 0,
        limit: 5
      }}
    >
      {({ loading, error, data, fetchMore }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error :(</p>;

        return (
          <div>
            {data.allPokemon.map(({ name, types, stars, img, id }, i) => {
              if (!showDetails[name]) {
                return (
                  <PokemonItem
                    id={id}
                    key={id}
                    src={img}
                    stars={stars}
                    hasStarred={false}
                    name={name}
                    types={types}
                  />
                );
              } else {
                return (
                  <Query
                    key={id}
                    query={GET_POKEMON_DETAILS}
                    variables={{ name: name }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p>Loading...</p>;

                      if (error) return <p>Error </p>;

                      const {
                        attack,
                        defense,
                        HP,
                        sp_atk,
                        sp_def,
                        speed
                      } = data.pokemon;

                      return (
                        <PokemonDetailItem
                          id={id}
                          key={id}
                          src={img}
                          stars={stars}
                          hasStarred={false}
                          name={name}
                          types={types}
                          attack={attack}
                          defense={defense}
                          HP={HP}
                          sp_atk={sp_atk}
                          sp_def={sp_def}
                          speed={speed}
                        />
                      );
                    }}
                  </Query>
                );
              }
            })}
            <LoadButton
              onClick={() =>
                fetchMore({
                  variables: {
                    offset: data.allPokemon.length
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, {
                      allPokemon: [
                        ...prev.allPokemon,
                        ...fetchMoreResult.allPokemon
                      ]
                    });
                  }
                })
              }
            />
          </div>
        );
      }}
    </Query>
  );
};

//--Redux--//
const mapStateToProps = state => {
  return {
    sortMethod: state.form.searchForm.values.sort,
    selectedFilters: state.form.searchForm.values,
    searchString: state.form.searchForm.values.search,
    showDetails: state.togglePokemonDetails,
    fetchAmount: state.setFetchAmount
  };
};

export default connect(mapStateToProps)(Pokemon);
