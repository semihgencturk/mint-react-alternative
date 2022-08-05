import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import App from "./App.js";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: Oxygen;
  color: white;

  button {
    color: white;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContainer>
    <App />
  </AppContainer>
);
