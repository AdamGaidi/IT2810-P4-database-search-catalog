import { COUNT_RESULTS } from "actions/actionTypes";

export default function countPokemonResults(state = {}, action) {
  switch (action.type) {
    case COUNT_RESULTS:
      return {
        numPokemonResults: action.payload.length
      };
    default:
      return state;
  }
}
