import { actionTypes } from "../actions/routeActions";
import defaultState from "./defaultState";

export const routeReducer = (state, action) => {
  if (state === undefined) {
    return defaultState.routeInfo;
  }
  let newState = { ...state };
  switch (action.type) {
  case actionTypes.updateDistance:
    newState.distance = action.distance;
    break;
  case actionTypes.clearRoute:
    newState.waypoints = [];
    break;
  case actionTypes.appendPoint:
    newState.waypoints.push(action.point);
    break;
  default:
    return state;
  }
  return newState;
};
