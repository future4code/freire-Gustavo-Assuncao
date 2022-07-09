import React, {useState} from 'react';
import Home from './components/Home/Home';
import GlobalStyle from './Styles'
import Matches from './components/Matches/Matches';


const App = () => {

  const [currentScreen, setCurrentScreen] = useState("home")

  const goToHome = () => {
    setCurrentScreen("home")
  }

  const goToMatches = () => {
    setCurrentScreen("matches")
  }

  const ChooseScreen = () => {
    switch (currentScreen){
      case "Home":
        return <Home goToMatches = {goToMatches}/>
      case "list":
        return <Matches goToMatches = {goToHome}/>
      default:
        return <h1>Erro! Página não encontrada</h1>
    }
  }

  return (
    <div>
      <GlobalStyle/>
      {ChooseScreen()}
      <Home />
    </div>
  );
};

export default App;

