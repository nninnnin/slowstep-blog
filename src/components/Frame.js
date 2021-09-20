import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  scroll-snap-align: start;

  overflow: hidden;
`;

export default function Frame({ children }) {
  return <Container>{children}</Container>;
}
