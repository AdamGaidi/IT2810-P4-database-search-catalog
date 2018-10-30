import { EXAMPLE_YAY, EXAMPLE_TWO } from "actions/actionTypes";

const defaultState = {
  examplePropOne: "example",
  examplePropTwo: "test2"
};

const test2 = (state = defaultState, action) => {
  switch (action.type) {
    case EXAMPLE_YAY:
      return {
        // these spread the previous state before adding and/or
        // modifying the desired properties, meaning you’ll end up
        // returning a copied, slightly modified version of the state
        //to the store with every action.
        ...state,
        examplePropOne: "newPropOne"
      };
    case EXAMPLE_TWO:
      return {
        ...state,
        examplePropTwo: action.payload
      };
    default:
      return state;
  }
};

export default test2;
