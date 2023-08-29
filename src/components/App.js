import React from "react";
import GlobalStyle from "../styles/global";

function App({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default App;
