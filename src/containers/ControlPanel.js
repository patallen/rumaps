import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLocation } from "../actions/controlActions";

import styled from "styled-components";

const StyledControls = styled.nav`
  position: absolute;
  padding-top: 18px;
  z-index: 11;
  height: 100%;
  width: 100%;
  transition: 0.2s;
  background: rgba(250, 250, 250, 0.86);
`;

const StyledToggleTag = styled.div`
  border: 1px solid #0077ff;
  z-index: 11;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  float: right;
  top: 0;
  transition: 0.3s;
  padding: 0 6px;
  height: 30px;
  background: rgba(250, 250, 250, 0.86);
  color: #0088ee;
  transform-origin: 0px 0px;
  transform: rotate(90deg);
  overflow: hidden;
  top: 100px;
  left: 30px;
  left: calc(100% + 30px);
  border-bottom: unset;
  &.toggled {
    padding: 0 3px;
    height: 20px;
    font-size: 0.9em;
    left: calc(100% + 11px);
    color: white;
    background: #0077ff;
    border-radius: 4px;
  }
`;
const ControlsPanel = styled.div`
  box-shadow: darkslategrey -5px 0px 6px 4px;
  transition: 0.3s;
  border-right: 2px solid #0077ff;
  position: absolute;
  width: 240px;
  z-index: 11;
  height: 100%;
  margin-left: -240px;
  &.toggled {
    margin-left: 0px;
  }
`;

const ControlLabel = styled.div`
  color: #0077ff;
  display: block;
  width: 100%;
  font-weight: bold;
  padding-left: 10px;
`;

const ControlWrapper = styled.div`
  padding: 4px 10px;
`;

const LocationInput = styled.input`
  height: 30px;
  font-size: 0.9em;
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 110, 255, 0.8);
  padding: 0 4px;
  &[disabled] {
    background: #f1f1f1;
    border: 1px solid rgba(0, 110, 255, 0.3);
  }
`;
class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: false
    };
  }
  render() {

    return (
      <ControlWrapper>
        <LocationInput disabled={this.loading || this.editing} />
      </ControlWrapper>
    );
  }
}

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleState = this._toggleState.bind(this);
  }
  _toggleState() {
    this.setState({ open: !this.state.open });
  }
  render() {
    let open = this.state.open;
    let className = open ? "toggled" : "";
    return (
      <ControlsPanel className={className}>
        <StyledControls toggled={open} className={className}>
          <ControlLabel>Location</ControlLabel>
          <LocationSelector callback={() => console.log("FUCK")} />
        </StyledControls>
        <StyledToggleTag onClick={this.toggleState} className={className}>
          CONTROLS
        </StyledToggleTag>
      </ControlsPanel>
    );
  }
}

const mapStateToProps = state => ({ location: state.location });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setLocation }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
