import React, { useState, useEffect } from "react";
import styled from "styled-components";

import App from "@components/App";
import SideNav from "@components/SideNav";
import Frame from "@components/Frame";
import Video from "@components/Video";

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

function Index() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ev = document.addEventListener("scroll", (e) => {
      // console.log(window.scrollY);
    });

    return () => {
      document.removeEventListener("scroll", ev);
    };
  }, [scrollPosition]);

  const handleStuck = (e) => {
    console.log(e);
  };

  const scrappedPosts = [
    {
      href:
        "https://www.thoughtworks.com/insights/blog/dividing-frontend-backend-antipattern",
      description:
        "Dividing frontend from backend is an antipattern - Rufus Raghunath (Mar 12, 2018)",
    },
  ];

  const videoSourceList = [
    "https://www.youtube.com/embed/96g3Ujlwfos?t=12",
    "https://www.youtube.com/embed/ixoYCveTWXk?start=3076&disablekb=1&controls=0",
    "https://www.youtube.com/embed/-NHORIGmj94?controls=0",
    "https://www.youtube.com/embed/sScagBZxYyk?controls=0&amp;start=893",
    "https://www.youtube.com/embed/hwZGH2G_Gzo?controls=0",
    "https://www.youtube-nocookie.com/embed/RgqZuPCZiq8?controls=0",
    "https://www.youtube-nocookie.com/embed/yyQE-A9XDpQ?controls=0",
  ];

  return (
    <App>
      <Container>
        <Logo onChange={handleStuck} lang="en">
          Slow step.
        </Logo>
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
    </App>
  );
}

export default Index;
