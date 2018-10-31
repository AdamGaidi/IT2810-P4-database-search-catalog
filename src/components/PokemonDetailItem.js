import React from "react";
import Card from "components/Card";
import FontAwesome from "components/FontAwesome";
import Pill from "components/Pill";
import Stat from "components/Stat";
import pokemonTypes from "pokemonTypes";
import "./PokemonDetailItem.css";

const PokemonDetailItem = ({ src, stars, hasStarred, name, types, stats }) => {
  return (
    <Card className="PokemonDetailItem">
      <div className="PokemonDetailItem__info">
        <img src={src} alt={name} className="PokemonDetailItem__img" />
        <div className="PokemonDetailItem__info-wrapper">
          <div className="PokemonDetailItem__main-info">
            <span className="PokemonDetailItem__name">{name}</span>

            <div className="PokemonDetailItem__types">
              {types &&
                types.map((type, i) => {
                  return (
                    <Pill key={type} text={type} color={pokemonTypes[type]} />
                  );
                })}
            </div>
          </div>

          <div className="PokemonDetailItem__stats">
            <span className="PokemonDetailItem__stats-title">Base stats</span>
            <Stat label="HP" number="35" />
            <Stat label="Attack" number="35" />
            <Stat label="Defense" number="35" />
            <Stat label="Sp. Atk" number="35" />
            <Stat label="Sp. Def" number="35" />
            <Stat label="Speed" number="35" />
          </div>
        </div>
      </div>

      <div className="PokemonDetailItem__stars">
        <FontAwesome
          icon="star"
          stylePrefix="far"
          className="PokemonDetailItem__star-icon"
        />
        {stars}
      </div>

      <button
        onClick={() => console.log(name, " less was clicked")}
        className="PokemonDetailItem__show-more"
      >
        Click to see less
      </button>
    </Card>
  );
};

export default PokemonDetailItem;
