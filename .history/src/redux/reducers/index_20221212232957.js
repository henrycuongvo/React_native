import { combineReducers } from "@reduxjs/toolkit";
import burgerReducer from "./burger.reducer";

const appReducer = combineReducers({
  burgerReducer,
});
export default appReducer;
