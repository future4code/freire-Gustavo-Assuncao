import React from "react";
import GlobalStyle from "./globalStyles"
import Router from "./routes/Router"
import Header from "./components/header/Header";

const App = () =>  {

  return (
    <div >
      <Header  />
       <Router /> 
       <GlobalStyle />
    </div>
  );
}

export default App;
