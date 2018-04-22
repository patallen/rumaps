import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = { markers: [] }
        this.addMarker = this._addMarker.bind(this)
    }
    componentDidMount() {
        this.loadMap()
    }
    _addMarker({ latLng }) {
        let marker = { lat: latLng.lat(), lng: latLng.lng() };
        this.setState({ markers: [...this.state.markers, marker] })
    }
    loadMap() {
        const { options, google } = this.props;
        if (this.props && this.props.google) {
            const node = ReactDOM.findDOMNode(this.refs.map);
            this.map = new google.maps.Map(node, options);
            google.maps.event.addListener(this.map, 'click', this.addMarker)
        }
    }

    render() {
        return (
            <MapContainer ref="map">
                loading map...
            </MapContainer>
        )
    }
}

export const MapContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`
export default GoogleMap;
