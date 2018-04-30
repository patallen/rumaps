import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLocation } from "../actions/controlActions";
import { clearRoute } from "../actions/routeActions";
import PropTypes from "prop-types";
import styled from "styled-components";
import LocationSelector from "../components/LocationSelector";

const StyledControls = styled.nav`
  position: absolute;
  padding-top: 18px;
  z-index: 11;
  height: 100%;
  width: 100%;
  transition: 0.2s;
  background: rgba(250, 250, 250, 0.86);
`;

const ClearButton = styled.div`
  width: 100%;
  border: 1px solid #0077ff;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  color: #0077ff;
  background-color: white;
`;

const StyledToggleTag = styled.div`
  align-items: center;
  background: rgba(250, 250, 250, 0.86);
  border-bottom: unset;
  border: 1px solid #0077ff;
  color: #0088ee;
  cursor: pointer;
  display: flex;
  float: right;
  height: 30px;
  left: calc(100% + 30px);
  overflow: hidden;
  padding: 0 6px;
  position: absolute;
  top: 0;
  top: 100px;
  transform-origin: 0px 0px;
  transform: rotate(90deg);
  transition: 0.3s;
  z-index: 11;
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
  padding-left: 2px;
`;

const ControlWrapper = styled.div`
  padding: 4px 10px;
  margin-top: 4px;
`;

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
          <ControlWrapper>
            <ControlLabel>Location</ControlLabel>
            <LocationSelector
              selectCallback={s =>
                this.props.actions.setLocation({ coordinates: s.location })
              }
            />
          </ControlWrapper>
          <ControlWrapper>
            <ControlLabel>Route</ControlLabel>
            <ClearButton onClick={this.props.actions.clearRoute}>
              Clear Waypoints
            </ClearButton>
          </ControlWrapper>
        </StyledControls>
        <StyledToggleTag onClick={this.toggleState} className={className}>
          CONTROLS
        </StyledToggleTag>
      </ControlsPanel>
    );
  }
}

ControlPanel.propTypes = {
  google: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = state => ({ location: state.location });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setLocation, clearRoute }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
