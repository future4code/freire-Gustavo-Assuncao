// import './App.css';
import React from 'react';
import axios from 'axios';
import styled from "styled-components";


const CardUsuario = styled.div`
      color: green;
       padding: 10px;
       width: 300px;
       display:flex;
       justify-content: space-between;

       button {
        width: 8%;
        display:flex;
        justify-content: center;
        background-color:red;
       }
`



export default class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }


  pegarUsuarios = () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios.get(url, {
      headers: {
        Authorization: "Gustavo-Monteiro"
      }
    })
      .then((res) => {
        this.setState({ usuarios: res.data })
      })

      .catch((err) => {
        alert('Ops!Ocorreu um prblema, tente novamente')

      })
  }


  deletarUsuario = (id) => {
    if (window.confirm('Tem certeza que deseja deletar?')) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

      axios.delete(url, {
        headers: {
          Authorization: "Gustavo-Monteiro"
        }
      }).then((res) => {
        alert
          ('Usuário(a) deletado(a) com sucesso!')
        this.pegarUsuarios()
      })
        .catch((err) => {
          alert('Ocorreu um erro, tente novamente')
        })
    }
    else {
      alert('operação cancelada')
    }
  }

  render() {
    console.log(this.state.usuarios)
    const listaUsuarios = this.state.usuarios.map((user) => {
      return <CardUsuario key={user.id}>{user.name}
      <button onClick={() => this.deletarUsuario(user.id)}>x</button>
      </CardUsuario>
    })


    return (
      <div className="telaDeCadastro">
        <button
          className='buttonTrocarDeTela'
          onClick={this.props.irParaCadastro}
        >Tela de cadastro
        </button>
        <div className="containerTelaDeCadastro">
          <h3>Usuários Cadastrados</h3>
          {listaUsuarios}
        </div>
      </div>
    );
  }
}

