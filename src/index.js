import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import theme from "./theme";
import ToggleColorMode from "./ToggleColorMode";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <ToggleColorMode />
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // <ThemeProvider theme={theme}>
  //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //   <CssBaseline />
  //   <App />
  // </ThemeProvider>,
);
