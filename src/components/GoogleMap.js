import React from "react";
import { Marker, Map, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
    this.ref = React.createRef();
    this.handleEvent = this._handleEvent.bind(this);
    this.onMapReady = this._onMapReady.bind(this);
  }

  buildMarkers() {
    return this.state.markers.map(m => (
      <Marker key={m.id} lat={m.lat} lng={m.lng} />
    ));
  }

  _setupListeners(listenerConfs) {
    for (let [name, callback] of listenerConfs) {
      this.map.google.events.addListener(this.map, name, callback);
    }
  }
  _handleEvent(_event) {
    // TODO: Central dispatch of GoogleMap events.
  }

  _onMapReady(_event) {
    // TODO: Do we want to do anythng where it's ready?
  }

  render() {
    const google = this.props.google;
    const { disableDefaultUI, center, zoom, styles } = this.props.options;
    return (
      <Map
        center={center}
        centerAroundCurrentLocation={true}
        disableDefaultUI={disableDefaultUI}
        google={google}
        onReady={this._onMapReady.bind(this)}
        ref={m => (this.map = m)}
        styles={styles}
        zoom={zoom}
      >
        {this.buildMarkers()}
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  options: PropTypes.object
};

const wrapped = GoogleApiWrapper(p => ({
  apiKey: p.apiKey,
  options: p.options
}))(MapContainer);

export default wrapped;
