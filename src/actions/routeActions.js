export const actionTypes = {
  updateDistance: "UPDATE_DISTANCE",
  clearRoute: "CLEAR_ROUTE",
  appendPoint: "APPEND_POINT"
};

export const updateDistance = ({ distance }) => {
  return {
    type: actionTypes.updateDistance,
    distance
  };
};

export const clearRoute = () => ({
  type: actionTypes.clearRoute
});

export const appendPoint = point => ({
  type: actionTypes.appendPoint,
  point
});
