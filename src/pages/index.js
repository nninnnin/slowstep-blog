import React from 'react';
import styled from 'styled-components';

import App from "@components/App";

const Container = styled.div`
  text-align: center;
`;

function Index () {
  return (
    <App>
      <Container>
        <h1>Slow step.</h1>
        쓸로우 스템
      </Container>
    </App>
  );
}

export default Index;
