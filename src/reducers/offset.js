import { RESET_OFFSET, INCREMENT_OFFSET } from "actions/actionTypes";

export default function offset(state = 0, action) {
  switch (action.type) {
    case RESET_OFFSET:
      return 0;
    case INCREMENT_OFFSET:
      return state + 5;
    default:
      return state;
  }
}
