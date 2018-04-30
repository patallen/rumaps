import { actionTypes } from "../actions/infoActions";
import defaultState from "./defaultState";

export const infoReducer = (state, action) => {
  if (state === undefined) {
    return defaultState.routeInfo;
  }
  let newState = { ...state };
  switch (action.type) {
  case actionTypes.updateDistance:
    newState.distance = action.distance;
    break;
  default:
    return state;
  }
  return newState;
};
