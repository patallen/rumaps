export const actionTypes = {
  setLocation: "SET_LOCATION"
};

export const setLocation = ({ coordinates }) => {
  return {
    type: actionTypes.setLocation,
    coordinates
  };
};
