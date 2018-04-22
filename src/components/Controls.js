import React from "react";
import styled from "styled-components";


const StyledControls = styled.nav`
  position: absolute;
  display: flex;
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
    background: #0077FF;
    border-radius: 4px;
  }
`;
const ControlsPanel = styled.div`
  box-shadow: darkslategrey -5px 0px 6px 4px;
  transition: 0.3s;
  display: flex;
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
class Controls extends React.Component {
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
        <StyledControls toggled={open} className={className}/>
        <StyledToggleTag onClick={this.toggleState} className={className}>
          CONTROLS
        </StyledToggleTag>
      </ControlsPanel>
    );
  }
}

export default Controls;
