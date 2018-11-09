import React, { Component } from "react";
import "./PokemonItem.css";
import FontAwesome from "components/FontAwesome";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class StarButton extends Component {
  state = {
    isStarred: this.props.isStarred
  };

  handleClick() {
    var action = this.state.isStarred
      ? this.props.UNSTAR_POKEMON
      : this.props.STAR_POKEMON;
    action({
      variables: { name: this.props.name, stars: this.props.stars }
    })
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
    this.setState(prevState => ({
      isStarred: !prevState.isStarred
    }));
  }

  render() {
    return (
      <div>
        <button
          className="PokemonItem__star-button"
          onClick={() => this.handleClick()}
          padding={"0px"}
        >
          <FontAwesome
            icon="star"
            stylePrefix={this.state.isStarred ? "fas" : "far"}
            className="PokemonItem__star-icon"
          />
        </button>
      </div>
    );
  }
}

const STAR_POKEMON = gql`
  mutation StarPokemon($name: String!, $stars: Int!) {
    starPokemon(name: $name, stars: $stars) {
      name
      stars
    }
  }
`;

const UNSTAR_POKEMON = gql`
  mutation UnStarPokemon($name: String!, $stars: Int!) {
    unStarPokemon(name: $name, stars: $stars) {
      name
      stars
    }
  }
`;

export default graphql(STAR_POKEMON, { name: "STAR_POKEMON" })(
  graphql(UNSTAR_POKEMON, { name: "UNSTAR_POKEMON" })(StarButton)
);
