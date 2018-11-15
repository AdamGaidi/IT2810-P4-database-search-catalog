import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import pokemonTypes from "constants/pokemonTypes";
import { toggleDetailsAction } from "actions/pokemonDetailActions";

import PokemonDetailItem from "components/PokemonDetailItem";
import Pill from "components/Pill";

const PokemonDetailItemContainer = ({
  toggleDetailsAction,
  src,
  stars,
  name,
  types,
  attack,
  number,
  defense,
  hp,
  sp_atk,
  sp_def,
  speed
}) => {
  const typePills = types.map((type, i) => {
    return <Pill key={type} text={type} color={pokemonTypes[type]} />;
  });

  return (
    <PokemonDetailItem
      onClick={() => toggleDetailsAction(name)}
      imgSrc={src}
      stars={stars}
      name={name}
      types={typePills}
      number={number}
      attack={attack}
      defense={defense}
      hp={hp}
      sp_atk={sp_atk}
      sp_def={sp_def}
      speed={speed}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDetailsAction }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonDetailItemContainer);
