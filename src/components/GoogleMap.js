import React from "react";
import { Marker, Map, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: [] };
    this.ref = React.createRef();
    this.onMapReady = this._onMapReady.bind(this);
    this.onMapClicked = this._onMapClicked.bind(this);
  }

  buildMarkers() {
    let rv = [];
    for (let point of this.state.points) {
      let loc = point.location;
      rv.push(
        <Marker key={rv.length} position={{ lat: loc.lat(), lng: loc.lng() }} />
      );
    }
    return rv;
  }

  _onMapReady(/*event*/) {
    window.map = this.map;
    this.directions = new this.props.google.maps.DirectionsService();
    this.display = new this.props.google.maps.DirectionsRenderer({
      // draggable: true,
      map: this.map.map,
      preserveViewport: true,
      suppressMarkers: true
    });
  }

  displayRoute(points) {
    if (points.length > 0) {
      let origin = points[0];
      let destination = points[points.length - 1];
      let waypoints = points.slice(1, points.length - 1);
      this.directions.route(
        {
          origin,
          destination,
          waypoints,
          travelMode: "WALKING"
        },
        (response, status) => {
          if (status === "OK") {
            this.display.setDirections(response);
          }
        }
      );
    }
  }

  _onMapClicked(event, map, location) {
    let points = [...this.state.points, { location: location.latLng }];
    this.setState({ points });
  }

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
    this.displayRoute(this.state.points);
    return (
      <Map
        ref={m => (this.map = m)}
        center={center}
        disableDefaultUI={disableDefaultUI}
        google={google}
        onReady={this.onMapReady}
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
