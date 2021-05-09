import React from 'react';
import styled from "styled-components";
import { COLOR_PRIMARY } from "@constants/theme.js";

const Container = styled.div`
  background-color: #000000;
  position: fixed;
  top: 400px;
  left: 200px;
  opacity: 0.5;
  transition: 0.15s;

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 960px) {
    top: inherit;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -30%);
    width: 90vw;
    display: flex;
    justify-content: space-evenly;
  }
`;

const NavItem = styled.div`
  color: white;
  text-align: center;
  font-family: "Dela Gothic One";
  font-weight: normal;
  font-size: 2em;
  padding: 1em;
`;

const Text = styled.span`
  cursor: pointer;
`;

function SideNav () {
  return (
    <Container>
      {['HoME', 'ArChivE', 'advisE'].map(el => {
        return <NavItem>
          <Text>{el}</Text>
          </NavItem>
      })}
    </Container>
  );
}

export default SideNav;
