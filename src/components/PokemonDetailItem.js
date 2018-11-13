import React from "react";
import Card from "components/Card";
import FontAwesome from "components/FontAwesome";
import Pill from "components/Pill";
import Stat from "components/Stat";
import pokemonTypes from "pokemonTypes";
import "./PokemonDetailItem.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleDetailsAction } from "actions/pokemonDetailActions";

const PokemonDetailItem = ({
  toggleDetailsAction,
  src,
  stars,
  hasStarred,
  name,
  types,
  attack,
  defense,
  HP,
  sp_atk,
  sp_def,
  speed
}) => {
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
            <Stat label="HP" number={HP} />
            <Stat label="Attack" number={attack} />
            <Stat label="Defense" number={defense} />
            <Stat label="Sp. Atk" number={sp_atk} />
            <Stat label="Sp. Def" number={sp_def} />
            <Stat label="Speed" number={speed} />
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
        onClick={() => toggleDetailsAction(name)}
        className="PokemonDetailItem__show-more"
      >
        Click to see less
      </button>
    </Card>
  );
};

//--Redux--//
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDetailsAction }, dispatch);
};

// export default App;
export default connect(
  null,
  mapDispatchToProps
)(PokemonDetailItem);
