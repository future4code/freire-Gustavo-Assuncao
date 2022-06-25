import React from "react";
import Home from "./pages/home";
import Playlist from "./pages/playlist"; 


class App extends React.Component {
    state = {
      telaAtual: "home"
};

    escolherTela = () => {
      switch (this.state.telaAtual) {
        case "home":
          return <Home/>;
          case "playlist":
          return <Playlist/>;
          default:
          return <Home/>
      }
    };

    mudarTela = (nomeTela) => {
      this.setState({telaAtual: nomeTela})
    };

  render () {
    return (
      <div>
{this.escolherTela()}
<button onClick={()=>this.mudarTela("playlist")}>Playlist</button>
<button onClick={()=>this.mudarTela("home")}>Home</button>
    </div>
    )
  }
}

export default App;

