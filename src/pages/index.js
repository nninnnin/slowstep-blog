import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import App from "@components/App";
import SideNav from "@components/SideNav";

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 120px;
  margin: 0;
  font-family: "Dela Gothic One";
  position: sticky;
  top: 20px;
`;

const Frame = styled.iframe`
  width: 100%;
  max-width: 700px;
  height: 400px;
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
        <Logo lang="en">Slow step.</Logo>
        <p>
          <a href="https://www.thoughtworks.com/insights/blog/dividing-frontend-backend-antipattern">
          Dividing frontend from backend is an antipattern - Rufus Raghunath (Mar 12, 2018)
          </a>
        </p>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/zqonx8Ea-S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IVWw4Oi_O4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/> */}
        <Frame src="https://www.youtube-nocookie.com/embed/RgqZuPCZiq8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <br/>
        <Frame src="https://www.youtube-nocookie.com/embed/yyQE-A9XDpQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </Container>
      <SideNav />
    </App>
  );
}

export default Index;
