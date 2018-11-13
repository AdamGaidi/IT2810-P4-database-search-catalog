import React from "react";
import Card from "components/Card";
import FontAwesome from "components/FontAwesome";
import "./PokemonItem.css";
import Pill from "components/Pill";
import pokemonTypes from "pokemonTypes";
import StarButton from "components/StarButton";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleDetailsAction } from "actions/pokemonDetailActions";

const PokemonItem = ({
  src,
  stars,
  hasStarred,
  name,
  types,
  toggleDetailsAction
}) => {
  return (
    <Card className="PokemonItem">
      <img src={src} alt={name} className="PokemonItem__img" />

      <span className="PokemonItem__name">{name}</span>

      <div className="PokemonItem__stars">
        <StarButton name={name} />
        {stars}
      </div>

      <div className="PokemonItem__types">
        {types &&
          types.map((type, i) => {
            return <Pill key={type} text={type} color={pokemonTypes[type]} />;
          })}
      </div>

      <button
        onClick={() => toggleDetailsAction(name)}
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

//export default PokemonItem;

//--Redux--//
const mapStateToProps = state => {
  return {
    examplePropOne: state.test2.examplePropOne
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDetailsAction }, dispatch);
};

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonItem);
