import axios from "axios";
import React from "react";


export default class InputGenero extends React.Component {
    state = {
        genero: ""
    }  

    escolheGenero = (event) => {
        this.setState({genero: event.target.value});
    }

    criarPlaylist = () =>  {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name: this.state.genero,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Gustavo-Monteiro-Freire"
            }
        }).then((res)=> {
            alert('Playlist cadastrada com sucesso!')
            this.setState({genero:''})
        })
        .catch((error)=> {
            alert(error.response.data.message)
        })
    }

    render () {

        return (
            <div>
                <input 
                type="text"
                placeholder="Digite um gênero musical"
                value = {this.state.genero}
                onChange = {this.escolheGenero}
                />
                <button
                id="buttonCriarPlaylist"
                onClick = {this.criarPlaylist}
                >Confirmar
                </button>
            </div>
        
        )
    }
}