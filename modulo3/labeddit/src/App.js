import  Router from "./routes/Router";
import React from "react";
import { GlobalStyles } from "./GlobalStyles"



const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
