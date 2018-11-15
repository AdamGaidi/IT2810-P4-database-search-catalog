import React from "react";
import PropTypes from "prop-types";

import pokemonTypes from "pokemonTypes";

import StarButton from "containers/StarButtonContainer";
import Card from "components/Card";
import FontAwesome from "components/FontAwesome";
import Pill from "components/Pill";
import "./css/PokemonItem.css";

const PokemonItem = ({ imgSrc, stars, name, types, number, onClick }) => {
  return (
    <Card className="PokemonItem">
      <img src={imgSrc} alt={name} className="PokemonItem__img" />

      <span className="PokemonItem__name">
        <span className="PokemonItem__number">{number}</span> {name}
      </span>

      <div className="PokemonItem__stars">
        <StarButton name={name} />
        {stars}
      </div>

      <div className="PokemonItem__types">{types}</div>

      <button onClick={() => onClick(name)} className="PokemonItem__show-more">
        Click to see more
        <FontAwesome
          icon="angle-down"
          className="PokemonItem__show-more-icon"
        />
      </button>
    </Card>
  );
};

PokemonItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.element).isRequired,
  number: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PokemonItem;
