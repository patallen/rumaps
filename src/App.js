import React from "react";
import PropTypes from "prop-types";

import GoogleMap from "./components/GoogleMap";
import Controls from "./components/Controls";
import Header from "./components/Header";
import defaultMapOptions from "./mapOptions";

import styled from "styled-components";

import "./App.css";

const Columns = styled.section`
  position: relative;
  flex-direction: row;
  display: flex;
  box-orient: vertical;
  height: 100%;
  overflow-y: hidden;
`;

const ViewPort = styled.div`
  display: flex;
  flex-direction: column;
  box-orient: horizontal;
  box-pack: justify;
  width: 100%;
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <ViewPort>
        <Header />
        <Columns>
          <Controls />
          <GoogleMap
            apiKey="AIzaSyAwc8mApYAD-PhpnMbAsp6EcpkEZAn1by0"
            google={this.props.google}
            options={defaultMapOptions}
          />
        </Columns>
      </ViewPort>
    );
  }
}

App.propTypes = {
  google: PropTypes.object
};

export default App;
