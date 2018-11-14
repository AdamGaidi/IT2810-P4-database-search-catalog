import React from "react";
import "./PokemonItem.css";
import FontAwesome from "components/FontAwesome";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { connect } from "react-redux";
import { toggleStarAction } from "actions/starPokemonActions";
import { bindActionCreators } from "redux";

const STAR_POKEMON = gql`
  mutation StarPokemon($name: String!) {
    starPokemon(name: $name) {
      id
      stars
    }
  }
`;

const UNSTAR_POKEMON = gql`
  mutation UnStarPokemon($name: String!) {
    unStarPokemon(name: $name) {
      id
      stars
    }
  }
`;

const StarButton = ({ isStarred, name, toggleStarAction }) => {
  const starred = isStarred[name] ? isStarred[name] : false;
  const action = starred ? UNSTAR_POKEMON : STAR_POKEMON;

  return (
    <Mutation mutation={action}>
      {(updatePokemon, { data }) => (
        <div>
          <button
            className="PokemonItem__star-button"
            onClick={() => {
              updatePokemon({ variables: { name: name } });
              toggleStarAction(name);
            }}
            padding={"0px"}
          >
            <FontAwesome
              icon="star"
              stylePrefix={starred ? "fas" : "far"}
              className="PokemonItem__star-icon"
            />
          </button>
        </div>
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
)(StarButton);
