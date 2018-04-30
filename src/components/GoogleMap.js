import React from "react";
import { Marker, Map, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { updateDistance } from "../actions/infoActions";

const makeMarker = google => ({
  path: google.maps.SymbolPath.CIRCLE,
  scale: 5,
  fillColor: "#0077FF",
  fillOpacity: 0.7,
  strokeColor: "#0077FF",
  strokeWeight: 4
});

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
        <Marker
          key={rv.length}
          position={{ lat: loc.lat(), lng: loc.lng() }}
          icon={makeMarker(this.props.google)}
        />
      );
    }
    return rv;
  }

  getDistance() {
    let { points } = this.state;
    if (points.length > 1) {
      this.matrix.getDistanceMatrix(
        {
          origin: points[0],
          destination: points[points.length - 1],
          waypoints: points.slice(1, points.length - 2),
          travelMode: "WALKING"
        },
        response => {
          this.props.actions.updateDistance({
            distance: response.rows[0].elements[0].distance.value
          });
        }
      );
    } else {
      this.props.actions.updateDistance({ distance: 0 });
    }
  }
  _onMapReady(/*event*/) {
    let { maps } = this.props.google;
    this.directions = new maps.DirectionsService();
    this.display = new maps.DirectionsRenderer({
      // draggable: true,
      polylineOptions: {
        strokeColor: "#0066FF",
        strokeOpacity: 0.4,
        strokeWeight: 4
      },
      map: this.map.map,
      preserveViewport: true,
      suppressMarkers: true
    });
  }
  calcDistance(legs) {
    let distance = 0;
    for (let leg of legs) {
      distance += leg.distance.value;
    }
    return distance;
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
            let distance = this.calcDistance(response.routes[0].legs);
            this.props.actions.updateDistance({ distance });
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
  location: PropTypes.object,
  routeInfo: PropTypes.object,
  actions: PropTypes.object
};

const wrapped = GoogleApiWrapper(p => ({
  apiKey: p.apiKey,
  options: p.options
}))(MapContainer);

const mapStateToProps = state => ({
  location: state.location,
  routeInfo: state.routeInfo
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateDistance }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(wrapped);
