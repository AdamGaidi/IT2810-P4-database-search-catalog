import { COUNT_RESULTS } from "actions/actionTypes";

export const countResultsAction = payload => ({
  type: COUNT_RESULTS,
  payload: payload
});
