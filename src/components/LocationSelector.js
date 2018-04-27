import React from "react";
import PropTypes from "prop-types";
import GeoSelect from "react-geosuggest";
import { GoogleApiWrapper } from "google-maps-react";

class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: false
    };
    this.onSuggestSelect = this._onSuggestSelect.bind(this);
  }
  _onSuggestSelect(suggestion) {
    if (suggestion) {
      this.props.selectCallback(suggestion);
    }
  }
  render() {
    return (
      <GeoSelect
        onSuggestSelect={this.onSuggestSelect}
        googleMaps={this.props.google.maps}
        style={{
          suggestItem: {
            borderBottom: "1px solid lightgray",
            height: "40px",
            overflow: "hidden",
            padding: "0 6px",
            lineHeight: "40px",
            cursor: "pointer"
          },
          suggests: {
            borderLeft: "1px solid lightgray",
            borderRight: "1px solid lightgray",
            backgroundColor: "white"
          },
          input: {
            outline: "none",
            width: "100%",
            height: "42px",
            padding: "0 6px",
            fontSize: "1.0em"
          }
        }}
      />
    );
  }
}

LocationSelector.propTypes = {
  selectCallback: PropTypes.func,
  actions: PropTypes.object,
  google: PropTypes.object
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAwc8mApYAD-PhpnMbAsp6EcpkEZAn1by0"
})(LocationSelector);
