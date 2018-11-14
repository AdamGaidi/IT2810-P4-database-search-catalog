import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import countPokemonResults from "./countPokemonResults";
import togglePokemonDetails from "./togglePokemonDetails";
import toggleStarPokemon from "./toggleStarPokemon";

// All reducers need to be imported and put in here
export default combineReducers({
  togglePokemonDetails,
  toggleStarPokemon,
  countPokemonResults,
  form: reduxFormReducer
});
