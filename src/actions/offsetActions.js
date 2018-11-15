import { RESET_OFFSET, INCREMENT_OFFSET } from "actions/actionTypes";

export const resetOffset = () => ({
  type: RESET_OFFSET
});

export const incrementOffset = () => ({
  type: INCREMENT_OFFSET
});
