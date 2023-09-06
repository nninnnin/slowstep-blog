import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: calc(50% - 32px);
  left: 10%;
  transform: translate(-10%, -50%);
  color: gainsboro;
  background-color: #2b082b;

  max-height: 90vh;
  overflow: auto;

  @media only screen and (max-width: 1500px) {
    top: inherit;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -30%);
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 700px) {
    width: 100vw;
  }

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled.div`
  text-align: center;
  font-family: "Dela Gothic One";
  font-weight: normal;
  font-size: 2em;
  padding: 1em;
  padding-bottom: 1.145em;
  transition: 0.1s;

  &:hover {
    color: black;
  }

  @media only screen and (max-width: 600px) {
    color: black;
  }
`;

const Text = styled.span`
  cursor: default;
  user-select: none;
`;

function SideNav() {
  const handleScrollEvent = (e) => {
    console.log(e);

    e.stopPropagation();
  };

  return (
    <Container onScroll={handleScrollEvent}>
      {["HoME", "ArChivE", "advisE"].map((el) => {
        return (
          <NavItem key={el}>
            <Text>{el}</Text>
          </NavItem>
        );
      })}
    </Container>
  );
}

export default SideNav;
