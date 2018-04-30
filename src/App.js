import React from "react";
import PropTypes from "prop-types";

import GoogleMap from "./components/GoogleMap";
import ControlPanel from "./containers/ControlPanel";
import RouteInfo from "./containers/RouteInfo";
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

const App = props => {
  return (
    <ViewPort>
      <Header />
      <Columns>
        <ControlPanel />
        <GoogleMap
          apiKey="AIzaSyAwc8mApYAD-PhpnMbAsp6EcpkEZAn1by0"
          google={props.google}
          options={defaultMapOptions}
        />
      </Columns>
      <RouteInfo />
    </ViewPort>
  );
};

App.propTypes = {
  google: PropTypes.object
};

export default App;
