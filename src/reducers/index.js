import { combineReducers } from "redux";
import pokemon from "./pokemon";
import test from "./test";
import test2 from "./test2";

// All reducers need to be imported and put in here
export default combineReducers({
  pokemon,
  test,
  test2
});
