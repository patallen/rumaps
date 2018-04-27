import React from "react";
import { Marker, Map, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
    this.ref = React.createRef();
    this.handleEvent = this._handleEvent.bind(this);
    this.onMapReady = this._onMapReady.bind(this);
    this.onMapClicked = this._onMapClicked.bind(this);
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
  _handleEvent(/*event*/) {
    // TODO: Central dispatch of GoogleMap events.
  }

  _onMapReady(/*event*/) {
    window.map = this.map;
  }

  _onMapClicked(/*event*/) {}

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location) {
      this.map.map.setCenter(newProps.location.coordinates);
      this.forceUpdate();
    }
  }

  render() {
    const google = this.props.google;
    const { disableDefaultUI, location, zoom, styles } = this.props.options;

    let center = location ? location.coordinates : null;
    return (
      <Map
        center={center}
        centerAroundCurrentLocation={true}
        disableDefaultUI={disableDefaultUI}
        google={google}
        onReady={this._onMapReady.bind(this)}
        ref={m => (this.map = m)}
        styles={styles}
        onClick={this.onMapClicked}
        zoom={zoom}
      >
        {this.buildMarkers()}
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  options: PropTypes.object,
  location: PropTypes.object
};

const wrapped = GoogleApiWrapper(p => ({
  apiKey: p.apiKey,
  options: p.options
}))(MapContainer);

const mapStateToProps = state => ({ location: state.location });

export default connect(mapStateToProps)(wrapped);
