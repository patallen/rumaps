import { combineReducers } from "redux";
import { locationReducer } from "./controlReducers";
import { infoReducer } from "./infoReducers";

const combinedReducer = combineReducers({
  location: locationReducer,
  routeInfo: infoReducer
});

export default combinedReducer;
