import React from "react";
import GlobalStyle from "./globalStyles"
import Router from "./routes/Router"

const App = () =>  {

  return (
    <div >
       <Router /> 
       <GlobalStyle />
    </div>
  );
}

export default App;
