import React from "react";
import styled from "styled-components";
import FaPlus from "react-icons/lib/fa/plus";

const StyledControls = styled.nav`
  position: absolute;
  height: 100%;
  width: 240px;
  border-right: 2px solid #0077ff;
  min-width: ${({toggled}) => toggled ? "240px" : 0};
  max-width: ${({toggled}) => toggled ? "240px" : 0};
  transition: 0.2s;
  background: rgba(250, 250, 250, 0.86);
  z-index: 10;
`;

const ToggleCross = styled(FaPlus)`
  width: 80%;
  height: 80%;
  transition: 0.3s ease-in;
  transform: rotate(0deg);
  padding: 0;
  &.toggled {
    transform: rotate(135deg);
  }
`;

const StyledToggleButton = styled.div`
  transition: 0.4s cubic-bezier(1,.06,.79,-0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: 0.2s;
  height: 30px;
  width: 30px;
  top: 0;
  right: -30px;
  background: #0077ff;
  text-align: center;
  cursor: pointer;
  color: #eee;
  &.toggled {
    &:after {
      z-index: -1000;
      top: -110px;
    }
  }
  &:after {
    top: 0;
    display: flex;
    transition: 0.4s cubic-bezier(1,.06,.79,-0.24);
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    left: 30px;
    transform-origin: -15px 15px;
    transform: rotate(90deg);
    height: 30px;
    content: "CONTROLS";
    border: 1px solid #0088ee;
    color: #0088ee;
    background: rgba(255, 255, 255, 0.8);
    padding: 0 8px;
    z-index: -1
  }
`;

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggleState = this._toggleState.bind(this);
  }
  _toggleState() {
    this.setState({ open: !this.state.open });
  }
  render() {
    let open = this.state.open;
    let className = open ? "toggled" : "";
    return (
      <StyledControls toggled={open}>
        <StyledToggleButton onClick={this.toggleState} className={className}>
          <ToggleCross className={className} />
        </StyledToggleButton>
      </StyledControls>
    );
  }
}

export default Controls;
