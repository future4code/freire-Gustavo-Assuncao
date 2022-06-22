
import React from 'react';
import axios from 'axios';

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Gustavo-Monteiro"
            }
        }).then((res)=>{
            alert('Usuário(a) cadastrado(a) com sucesso!')
            this.setState({nome:'', email:''})
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })

    }
// eu vou ver o que acontece  dentro de sucesso de then e erro dentro de catch
    render() {

        return (
            <div className="telaDeCadastro">
                <button
                    className='buttonTrocarDeTela'
                    onClick={this.props.irParaLista}
                >Trocar de Tela
                </button>
                <div className="containerTelaDeCadastro">
                    <h3>Tela de Cadastro</h3>
                    <input 
                        className='inputCadastro'
                        type="text"
                        placeholder="Nome"
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                    <input 
                        className='inputCadastro'
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    <button 
                    id='buttonCriarUsuario'
                    onClick={this.fazerCadastro}
                    >Cadastrar</button>


                </div>
            </div>
        )
    }
}