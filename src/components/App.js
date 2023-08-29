import React from "react";
import styled from "styled-components";

import GlobalStyle from "@styles/global";
import SideNav from "@components/SideNav";
import Frame from "@components/Frame";
import Video from "@components/Video";
import videoSourceList from "@data/videos.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Logo lang="en">Slow step.</Logo>
        {videoSourceList.map((videoSrc) => {
          return (
            <Frame key={videoSrc}>
              <Video
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Frame>
          );
        })}
      </Container>
      <SideNav />
    </>
  );
}

const Container = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  scroll-snap-type: y mandatory;
`;

const Logo = styled.h1`
  font-family: "Dela Gothic One";
  position: sticky;
  top: 20px;

  @media only screen and (max-width: 720px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 50px;
    color: white;
  }
`;

const Paragraph = styled.div`
  margin: 0 auto;
  margin-bottom: 500px;
  width: 100%;
  max-width: 700px;
  height: 400px;
  border: 2px solid darkgray;
`;

const Link = styled.a``;

export default App;
