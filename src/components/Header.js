import React from "react";
import styled from "styled-components";
import FaMap from "react-icons/lib/fa/map";

const StyledHeader = styled.header`
  z-index: 10;
  box-shadow: darkslategrey 0 -4px 6px 4px;
  height: 50px;
  background: #0077ff;
  text-transform: uppercase;
  font-family: helvetica;
`;

const StyledFaMap = styled(FaMap)`
  margin: 0 4px;
`;

const HeaderLogo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  height: 100%;
  color: #f0f0f0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo>
        ru<StyledFaMap />aps
      </HeaderLogo>
    </StyledHeader>
  );
};

export default Header;
