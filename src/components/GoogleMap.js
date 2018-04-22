import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
    this.addMarker = this._addMarker.bind(this);
  }
  componentDidMount() {
    this.loadMap();
  }
  _addMarker({ latLng }) {
    let marker = { lat: latLng.lat(), lng: latLng.lng() };
    this.setState({ markers: [...this.state.markers, marker] });
  }
  loadMap() {
    const { options, google } = this.props;
    this.map = new google.maps.Map(this.map.node, options);
    google.maps.event.addListener(this.map, "click", this.addMarker);
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={m => (this.map = m)}>
        loading map...
      </div>
    );
  }
}

GoogleMap.propTypes = {
  google: PropTypes.Object,
  options: PropTypes.Object
};

export default styled(GoogleMap)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  overflow: hidden;
  position: absolute;
`;
