import { TOGGLE_DETAILS } from "actions/actionTypes";

export const toggleDetailsAction = payload => ({
  type: TOGGLE_DETAILS,
  payload: payload
});
