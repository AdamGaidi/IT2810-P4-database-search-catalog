import React from "react";
import Card from "components/Card";
import FontAwesome from "components/FontAwesome";
import "./PokemonItem.css";
import Pill from "components/Pill";
import pokemonTypes from "pokemonTypes";

const PokemonItem = ({ src, stars, hasStarred, name, types }) => {
  return (
    <Card className="PokemonItem">
      <img src={src} alt={name} className="PokemonItem__img" />
      <span className="PokemonItem__name">{name}</span>

      <div className="PokemonItem__stars">
        <FontAwesome
          icon="star"
          stylePrefix="far"
          className="PokemonItem__star-icon"
        />
        {stars}
      </div>

      <div className="PokemonItem__types">
        {types &&
          types.map((type, i) => {
            console.log(type);
            return <Pill text={type} color={pokemonTypes[type]} />;
          })}
      </div>

      <button
        onClick={() => console.log(name, " was clicked")}
        className="PokemonItem__show-more"
      >
        Click to see more
        <FontAwesome
          icon="angle-down"
          className="PokemonItem__show-more-icon"
        />
      </button>
    </Card>
  );
};

export default PokemonItem;
