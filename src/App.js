import React, { Component } from 'react';
import { GoogleApiWrapper } from "google-maps-react";

import GoogleMap from './components/GoogleMap';
import Controls from './components/Controls';
import Header from './components/Header';
import defaultMapOptions from "./mapOptions";

import styled from 'styled-components';

import './App.css';

const Columns = styled.section`
  position: relative;
  flex-direction: row;
  display: flex;
  box-orient: vertical;
  height: 100%;
`;

const ViewPort = styled.div`
  display: flex;
  flex-direction: column;
  box-orient: horizontal;
  box-pack: justify;
  width: 100%;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <ViewPort>
        <Header />
        <Columns>
          <Controls />
          <GoogleMap google={this.props.google} options={defaultMapOptions} />
        </Columns>
      </ViewPort>
    );
  }
}

const wrapped = GoogleApiWrapper({
  apiKey: 'AIzaSyAwc8mApYAD-PhpnMbAsp6EcpkEZAn1by0'
})(App)

export default wrapped

