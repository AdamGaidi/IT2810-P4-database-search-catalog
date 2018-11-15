import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import pokemonTypes from "constants/pokemonTypes";
import { toggleDetailsAction } from "actions/pokemonDetailActions";

import PokemonItem from "components/PokemonItem";
import Pill from "components/Pill";

const PokemonItemContainer = ({
  src,
  stars,
  name,
  types,
  number,
  toggleDetailsAction
}) => {
  const typePills = types.map((type, i) => {
    return <Pill key={type} text={type} color={pokemonTypes[type]} />;
  });

  return (
    <PokemonItem
      imgSrc={src}
      name={name}
      number={number}
      stars={stars}
      types={typePills}
      onClick={() => toggleDetailsAction(name)}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDetailsAction }, dispatch);
};

// export default App;
export default connect(
  null,
  mapDispatchToProps
)(PokemonItemContainer);
