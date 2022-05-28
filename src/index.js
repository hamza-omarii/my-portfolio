import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./components/GlobalStyle.jsx";
import App from "./App";
import MainTheme from "./components/MainTheme.jsx";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
