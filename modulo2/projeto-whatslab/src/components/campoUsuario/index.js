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



  render() {
    const usuarioMensagem = this.state.conversa.map((chat) =>{
      return (
        <div className='balaoMsg'>
          <strong>{chat.usuario}</strong> {chat.mensagem}
        </div>
      )
    })
      return(
      <div className="ContainerInputs">
         <div className="balaozinho">{usuarioMensagem}</div>
        <div className="barraInputs">
        <input  
        className="usuarioInput"
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
        />
        <input 
        className="mensagemInput"  
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        onKeyDown={this.onEnterMensagem}
        placeholder={"Mensagem"}
        />
        <button onClick={this.enviaMensagem}> Enviar </button>
        </div>
      </div>
    );
  }
}

export default CampoUsuario;
