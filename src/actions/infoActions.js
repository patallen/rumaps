export const actionTypes = {
  updateDistance: "UPDATE_DISTANCE"
};

export const updateDistance = ({ distance }) => {
  return {
    type: actionTypes.updateDistance,
    distance
  };
};
