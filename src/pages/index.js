import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import App from "@components/App";

const Container = styled.div`
  text-align: center;
`;

function Index () {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ev = document.addEventListener('scroll', (e) => {
      console.log(window.scrollY);
    });

    return () => {
      document.removeEventListener('scroll', ev);
    };
  }, [scrollPosition]);

  return (
    <App>
      <Container>
        <h1 lang="en">Slow step.</h1>
      </Container>
    </App>
  );
}

export default Index;
