import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import pokemon from "./pokemon";
import test from "./test";
import test2 from "./test2";
import togglePokemonDetails from "./togglePokemonDetails";

// All reducers need to be imported and put in here
export default combineReducers({
  togglePokemonDetails,
  pokemon,
  test,
  test2,
  form: reduxFormReducer
});
