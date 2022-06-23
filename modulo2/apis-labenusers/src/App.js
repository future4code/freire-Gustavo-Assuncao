import React from 'react';
import './App.css';
import TelaListaUsuarios from './components/TelaListaUsuarios';
import TelaCadastro from './components/TelaCadastro';


class App extends React.Component {
    state = {
      telaAtual: "cadastro"
    }
// Temos duas telas, criei um estado para começar pela tela atual 
// agora vamos criar as duas telas abaixo: e chamamos em return
      escolheTela = () => {
        switch (this.state.telaAtual) {
        case "cadastro":
          return <TelaCadastro irParaLista = {this.irParaLista} />
        case "lista":
          return <TelaListaUsuarios irParaCadastro = {this.irParaCadastro}/>
        default:
          return <div>Erro! Página não encontrada :(</div>
      }
    }

// agora vamos fazer uma função para mudar de telas 
// e depois temos que passar essas props para dentro meu case

irParaCadastro = () => {
this.setState({telaAtual:"cadastro"})
}

irParaLista = () => {
  this.setState({telaAtual:"lista"})
}

  render() {

    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}

export default App;

