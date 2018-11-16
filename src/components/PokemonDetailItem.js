import React from "react";
import PropTypes from "prop-types";

import StarButton from "containers/StarButtonContainer";
import Card from "components/Card";
import Stat from "components/Stat";
import "./css/PokemonDetailItem.css";

/**
 * A component showing a detailed view about the pokemon,
 * with larger image and added stats.
 */

const PokemonDetailItem = ({
  onClick,
  imgSrc,
  stars,
  name,
  types,
  number,
  attack,
  defense,
  hp,
  sp_atk,
  sp_def,
  speed
}) => {
  return (
    <Card className="PokemonDetailItem">
      <div className="PokemonDetailItem__info">
        <img src={imgSrc} alt={name} className="PokemonDetailItem__img" />
        <div className="PokemonDetailItem__info-wrapper">
          <div className="PokemonDetailItem__main-info">
            <span className="PokemonDetailItem__name">
              <span className="PokemonDetailItem__number">{number}</span>
              {name}
            </span>

            <div className="PokemonDetailItem__types">{types}</div>
          </div>

          <div className="PokemonDetailItem__stats">
            <span className="PokemonDetailItem__stats-title">Base stats</span>
            <Stat label="HP" number={hp} />
            <Stat label="Attack" number={attack} />
            <Stat label="Defense" number={defense} />
            <Stat label="Sp. Atk" number={sp_atk} />
            <Stat label="Sp. Def" number={sp_def} />
            <Stat label="Speed" number={speed} />
          </div>
        </div>
      </div>

      <div className="PokemonDetailItem__stars">
        <StarButton name={name} />
        {stars}
      </div>

      <button
        onClick={() => onClick(name)}
        className="PokemonDetailItem__show-more"
      >
        Click to see less
      </button>
    </Card>
  );
};

PokemonDetailItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.element).isRequired,
  number: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  sp_atk: PropTypes.number.isRequired,
  sp_def: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};

export default PokemonDetailItem;
