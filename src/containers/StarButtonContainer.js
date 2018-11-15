import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Mutation } from "react-apollo";

import { toggleStarAction } from "actions/starPokemonActions";
import { STAR_POKEMON, UNSTAR_POKEMON } from "queries/starring";

import StarButton from "components/StarButton";

/*
  This components posts to backend when you click on the star button,
  and keeps track of if you have starred or not, which decides which mutation
  is sent. Since we have not implemented localStorage for this project
  (not a requirement or priority), you can technically refresh the page
  to star a pokemon again. This is something that would be implemented given
  the time.

  The result is a popularity count for each pokemon.
*/

const StarButtonContainer = ({ isStarred, name, toggleStarAction }) => {
  const starred = isStarred[name] ? isStarred[name] : false;
  const action = starred ? UNSTAR_POKEMON : STAR_POKEMON;

  return (
    <Mutation mutation={action}>
      {(updatePokemon, { data }) => (
        <StarButton
          name={name}
          isStarred={starred}
          action={action}
          onClick={() => {
            updatePokemon({ variables: { name: name } });
            toggleStarAction(name);
          }}
        />
      )}
    </Mutation>
  );
};

const mapStateToProps = state => {
  return {
    isStarred: state.toggleStarPokemon
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleStarAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarButtonContainer);
