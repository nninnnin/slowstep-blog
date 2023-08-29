import { createGlobalStyle } from "styled-components";
import DelaGothicOne from "../fonts/DelaGothicOne-Regular.ttf";
import SpoqaHanSansNeoLight from "../fonts/SpoqaHanSansNeo-Light.ttf";
import { COLOR_PRIMARY_OFF_WHITE } from "@constants/theme.js";

export default createGlobalStyle`
  @font-face {
    font-family: "Dela Gothic One";
    src: url(${DelaGothicOne}) format('truetype');
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo Light";
    src: url(${SpoqaHanSansNeoLight}) format('truetype');
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    margin: 0;
    padding: 0;
    word-wrap: break-word;
    font-family: "Spoqa Han Sans Neo Light", "Dela Gothic One";
    font-size: 16px;
    background-color: ${COLOR_PRIMARY_OFF_WHITE};
  }

  p {
    line-height: 54px;
    margin: 50px;
  }

  h1[lang="ko"] {
    font-family: "Spoqa Han Sans Neo Light"
  }
`;
