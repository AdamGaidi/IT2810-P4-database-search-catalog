import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Query } from "react-apollo";

import { countResultsAction } from "actions/countResultsAction";
import { incrementOffset } from "actions/offsetActions";
import { GET_ALL_POKEMON, GET_POKEMON_DETAILS } from "queries/pokemonInfo";

import PokemonItem from "containers/PokemonItemContainer";
import PokemonDetailItem from "containers/PokemonDetailItemContainer";
import LoadButton from "components/LoadButton";

/*
  This is the component which queries our GraphQL API for data and renders the
  pokemon items. It renders the correct version of the pokemon card based
  on redux state. Minimized version (PokemonItem) by default, and detailed
  version if you have clicked on "Show more".

  To minimize the load on the server and client, we use offset pagination,
  and we don't fetch the extra info on a pokemon, which is required for
  the detail view, until you have clicked on "Show more" for the pokemon.

  Since we use pagination, this component also contains a "Load more"-button
  at the bottom to fetch a new batch of pokemon.

  Apollo handles the caching for us pretty well for us, so that you don't
  unecessarily load the same pokemon several times.
*/

const Pokemon = ({
  sortMethod,
  selectedFilters,
  searchString,
  showDetails,
  offset,
  incrementOffset,
  countResultsAction
}) => {
  const sortingMethods = {
    alphabetical: "name_ASC",
    reversealphabetical: "name_DESC",
    popularity: "stars_DESC",
    pokemonnumber: "number_ASC"
  };

  // Creates a variable which will be sent with the query on which filters are applied
  const filterTypes = Object.keys(selectedFilters).filter(function(key) {
    if (key !== "sort" && key !== "search" && selectedFilters[key] === true) {
      return true;
    }
    return false;
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

        countResultsAction(data.allPokemon);
        return (
          <div>
            {data.allPokemon.map(
              ({ name, types, stars, img, id, number }, i) => {
                // Render the minimized item if not toggled to show details
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
                      number={number}
                    />
                  );
                } else {
                  return (
                    // Fetch the extra information needed for detail view
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
                            hp={HP}
                            sp_atk={sp_atk}
                            sp_def={sp_def}
                            speed={speed}
                            number={number}
                          />
                        );
                      }}
                    </Query>
                  );
                }
              }
            )}
            <LoadButton
              onClick={() => {
                incrementOffset();
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
                });
              }}
            />
          </div>
        );
      }}
    </Query>
  );
};

const mapStateToProps = state => {
  return {
    sortMethod: state.form.searchForm.values.sort,
    selectedFilters: state.form.searchForm.values,
    searchString: state.form.searchForm.values.search,
    showDetails: state.togglePokemonDetails,
    offset: state.offset
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ incrementOffset, countResultsAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
