import { TOGGLE_STAR } from "actions/actionTypes";

export default function toggleStarPokemon(state = {}, action) {
  switch (action.type) {
    case TOGGLE_STAR:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    default:
      return state;
  }
}
