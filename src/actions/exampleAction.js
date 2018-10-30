//  By convention, type is typically written in all caps and is very
// descriptive of what that action actually does. It often has another
// property called payload, in which we put any actual data being
// passed into the action.

// Avoid including any actual application logic inside of these actions:
// they should simply deliver a type and potentially some data.

import { EXAMPLE_YAY, EXAMPLE_TWO } from "actions/actionTypes";

// Redux actions are nothing more than Javascript objects. Like this:
// {
//   type: 'ADD_ARTICLE',
//   payload: { name: 'React Redux Tutorial', id: 1 }
// }
// It is a best pratice to wrap every action within a function.
// Such function is an action creator. Like these:

export const exampleAction = () => ({
  type: EXAMPLE_YAY
});

export const exampleActionTWO = sampleData => ({
  type: EXAMPLE_TWO,
  payload: sampleData
});
