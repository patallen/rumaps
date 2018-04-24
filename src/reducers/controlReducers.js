import { actionTypes } from "../actions/controlActions";

export const locationReducer = (state, action) => {
  if (state == undefined) {
    return {
      coordinates: {
        lat: null,
        lng: null
      },
      string: ""
    };
  }
  let newState = { ...state };
  switch (action.type) {
  case actionTypes.setLocation:
    return {
      coordinates: action.coordinates,
      string: action.string
    };
  default:
    return newState;
  }
};
