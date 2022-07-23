import React, {useState} from 'react';
import GlobalStyle from './Styles'
import Matches from './components/Matches/Matches';
import Home from './components/Home/Home';

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
      case "home":
        return <Home goToMatches = {goToMatches}/>
      case "matches":
        return <Matches goToHome = {goToHome}/>
      default:
        return <h1>Erro! Página não encontrada</h1>
    }
  }

  return (
    <div>
      <GlobalStyle/>
      {ChooseScreen()}
    </div>
  );
};

export default App;

