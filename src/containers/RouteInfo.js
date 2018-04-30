import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240, 240, 240, 0.9);
  border: 1px solid #0077ff;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  width: 200px;
  height: 140px;
  bottom: 20px;
  right: 20px;
  text-align: center;
  font-size: 1.2em;
  color: #0077ff;
`;

class RouteInfo extends React.Component {
  render() {
    return (
      <InfoBox>{this.props.routeInfo.distance / 1000.0} Kilometers</InfoBox>
    );
  }
}

RouteInfo.propTypes = {
  routeInfo: PropTypes.object
};

const mapStateToProps = state => ({ routeInfo: state.routeInfo });

export default connect(mapStateToProps)(RouteInfo);
