import { combineReducers } from "redux";
import { locationReducer } from "./controlReducers";
import { routeReducer } from "./routeReducers";

const combinedReducer = combineReducers({
  location: locationReducer,
  routeInfo: routeReducer
});

export default combinedReducer;
