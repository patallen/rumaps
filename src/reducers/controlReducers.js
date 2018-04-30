import { actionTypes } from "../actions/controlActions";
import defaultState from "./defaultState";

export const locationReducer = (state, action) => {
  if (state === undefined) {
    return defaultState.location;
  }
  let newState = { ...state };
  switch (action.type) {
  case actionTypes.setLocation:
    newState = {
      coordinates: action.coordinates,
      string: action.string
    };
    break;
  default:
    return state;
  }
  return newState;
};
