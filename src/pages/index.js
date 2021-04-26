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
        <h1 lang="en">Slow step.</h1>

        <p>
          거기서 뭐해요?<br/>
          누구요, 저요?<br/>
          네..당신 말고 여기 아무도 없어요. <br/>
        </p>

        <p>
          Welcome to slow step.
        </p>
      </Container>
    </App>
  );
}

export default Index;
