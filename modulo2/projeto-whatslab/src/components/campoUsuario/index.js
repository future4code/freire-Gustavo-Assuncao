import React from "react";
import '../style.css'

class CampoUsuario extends React.Component {
  state = {
    conversa: [
      {
        usuario: "",
        mensagem: ""
      }
    ],
    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  enviaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novaConversa = [...this.state.conversa, novaMensagem];
    this.setState({conversa: novaConversa})
    this.setState({valorInputUsuario:""})
    this.setState({valorInputMensagem:""})
  }

    onChangeInputUsuario = (event) => {
      this.setState({valorInputUsuario: event.target.value});
    }; 
    
    onChangeInputMensagem = (event) => {
      this.setState({valorInputMensagem: event.target.value});
    }; 

    onEnterMensagem = (event) =>{
      if (event.key === 'Enter') {
        this.enviaMensagem();
      }
    }

  render() {

    const usuarioMensagem = this.state.conversa.map((chat) =>{
      return (
        <p><strong>{chat.usuario}:</strong> {chat.mensagem}</p>
      )
    })
      return(
      <div className="App">
         
         <div className="balaozinho">{usuarioMensagem}</div>
        <input  className="usuarioInput"
        placeholder={"Usuário"}
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        />

        <input className="mensagemInput"  
        value={this.state.valorInputMensagem}
        placeholder={"Mensagem"}
        onChange={this.onChangeInputMensagem}
        onKeyDown={this.onEnterMensagem}
        />
        <button onClick={this.enviaMensagem}>Enviar</button>
      </div>
    );
  }
}

export default CampoUsuario;
