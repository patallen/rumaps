import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

const MapContainer = ({ google, options }) => {
  const { disableDefaultUI, center, zoom, styles } = options;
  return (
    <Map
      disableDefaultUI={disableDefaultUI}
      google={google}
      initialCenter={center}
      styles={styles}
      zoom={zoom}
    />
  );
};

MapContainer.propTypes = {
  google: PropTypes.object,
  options: PropTypes.object
};

const wrapped = GoogleApiWrapper(p => ({
  apiKey: p.apiKey,
  options: p.options
}))(MapContainer);

export default wrapped;
