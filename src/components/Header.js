import React from "react";
import styled from "styled-components";
import ToggleMode from "./ToggleMode";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-content">
          <ToggleMode />
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  z-index: 2;

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

export default Header;
