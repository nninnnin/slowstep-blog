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
    font-family: "Dela Gothic One", "Spoqa Han Sans Neo Light";
  }

  h1 {
    color: green;
    font-family: "Dela Gothic One";
    font-weight: normal;
    font-size: 150px;
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
