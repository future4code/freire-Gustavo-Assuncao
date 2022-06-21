import React from 'react';
import './App.css';
import OutraTela from './components';

class App extends React.Component {

  // TrocardeTela =() => {
  //   // this.setState({OutraTela})
  //   console.log('clica porra')
  // };

  render() {

    return (
      <div className="telaDeCadastro">
        <button className='buttonTrocarDeTela' 
         onClick={()=> this.setState({OutraTela})}
         >Trocar de Tela</button>
        <div className="containerTelaDeCadastro">
          <h3>Tela de Cadastro</h3>
          <input className='inputCadastro'
            type="text"
            placeholder="Nome"
          />
          <input className='inputCadastro'
            type="text"
            placeholder="Email"
          />
          <button id='buttonCriarUsuario'>Criar Usuário</button>


        </div>
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="telaDeCadastro">
//       <button 
//       className='buttonTrocarDeTela'
//       onClick={OutraTela}
//       >Trocar de Tela
//       </button>
//       <div className="containerTelaDeCadastro"> 
//       <h3>Tela de Cadastro</h3>
//       <input className='inputCadastro'
//       type="text"
//       placeholder="Nome"
//        />
//       <input className='inputCadastro'
//       type="text"
//       placeholder="Email"
//        />
//        <button id='buttonCriarUsuario'>Criar Usuário</button>


//       </div>
//     </div>
//   );
// }

