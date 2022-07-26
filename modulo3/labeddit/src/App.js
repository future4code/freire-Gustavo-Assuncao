import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components";




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
