import { TOGGLE_STAR } from "actions/actionTypes";

export const toggleStarAction = payload => ({
  type: TOGGLE_STAR,
  payload: payload
});
