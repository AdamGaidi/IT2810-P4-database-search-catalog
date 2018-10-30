// A reducer is effectively a giant switch statement that takes in an
// action and, depending on its type, updates the application’s state.

//A function which takes in the application’s state, as well as
// incoming actions, runs it through a switch statement, and returns
// the updated version of the state to deliver to the store:

import { ADD_POKEMON } from "actions/actionTypes";

export default function pokemon(state = [], action) {
  switch (action.type) {
    case ADD_POKEMON:
      return state.concat([action.text]);
    default:
      return state;
  }
}
