import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./Home";
import ComponentDetail from "./ComponentDetail";
import ColorModeContext from "./context/ColorModeContext";
// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact index element={<Home />} />
          <Route
            path="/components/:component_id"
            element={<ComponentDetail />}
          />
        </Routes>
        {/* <HomeAppBar />
        <div>Hello</div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
    // <Routes>
    //   <Route path="/" exact index element={<Home />} />
    // </Routes>
  );
}
