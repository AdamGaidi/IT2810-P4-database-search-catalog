import { TOGGLE_DETAILS } from "actions/actionTypes";

export default function togglePokemonDetails(state = {}, action) {
  switch (action.type) {
    case TOGGLE_DETAILS:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    default:
      return state;
  }
}
