import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "./GlobalStyle";



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
