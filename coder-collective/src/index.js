import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  font: {
    primary: "'Teko', sans-serif",
  },
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
