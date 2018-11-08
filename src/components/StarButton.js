import React, { Component } from "react";
import "./PokemonItem.css";
import FontAwesome from "components/FontAwesome";
import gql from "graphql-tag";

export default class StarButton extends Component {
  state = {
    isStarred: this.props.isStarred
  };

  handleClick() {
    this.setState(prevState => ({
      isStarred: !prevState.isStarred
    }));
  }

  render() {
    return (
      <div>
        <button
          className="PokemonItem_star-button"
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
