import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DelaGothicOne from "../fonts/DelaGothicOne-Regular.ttf";
import SpoqaHanSansNeoLight from "../fonts/SpoqaHanSansNeo-Light.ttf";

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
    word-wrap: break-word;
    font-family: "Spoqa Han Sans Neo Light", "Dela Gothic One";
    font-size: 16px;
  }

  p {
    line-height: 54px;
    margin: 50px;
  }

  h1 {
    color: green;
    font-family: "Dela Gothic One";
    font-weight: normal;
    font-size: 150px;
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
