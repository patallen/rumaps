import { combineReducers } from "redux";
import { locationReducer } from "./controlReducers";

const combinedReducer = combineReducers({
  location: locationReducer
});

export default combinedReducer;
