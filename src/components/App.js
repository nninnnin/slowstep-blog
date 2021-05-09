import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DelaGothicOne from "../fonts/DelaGothicOne-Regular.ttf";
import SpoqaHanSansNeoLight from "../fonts/SpoqaHanSansNeo-Light.ttf";
import { COLOR_PRIMARY } from "@constants/theme.js";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Dela Gothic One";
    src: url(${DelaGothicOne}) format('truetype');
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo Light";
    src: url(${SpoqaHanSansNeoLight}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    padding-bottom: 500px;
    word-wrap: break-word;
    font-family: "Spoqa Han Sans Neo Light", "Dela Gothic One";
    font-size: 16px;
    background-color: ${COLOR_PRIMARY};
  }

  p {
    line-height: 54px;
    margin: 50px;
  }

  h1[lang="ko"] {
    font-family: "Spoqa Han Sans Neo Light"
  }
`;

function App ({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default App;
