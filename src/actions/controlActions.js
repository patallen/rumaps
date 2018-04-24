export const actionTypes = {
  setLocation: "SET_LOCATION"
};

export const setLocation = ({ coordinates, string }) => {
  return {
    type: actionTypes.setLocation,
    payload: {
      coordinates,
      string
    }
  };
};
