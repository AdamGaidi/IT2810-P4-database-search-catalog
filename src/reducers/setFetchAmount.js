import { SET_FETCH_AMOUNT } from "actions/actionTypes";

export default function setFetchAmount(state = 5, action) {
  switch (action.type) {
    case SET_FETCH_AMOUNT:
      return state + 5;
    default:
      return state;
  }
}
