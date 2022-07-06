import React from "react";
import axios from "axios";
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

export default class ExibirPlaylist extends React.Component {
    state = {
        playlist: []
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios.get(url, {
            headers: {
                Authorization: "Gustavo-Monteiro-Freire"
            }
        }).then((res) => {
            this.setState({ playlist: res.data.result.list });
        })
            .catch((error) => {
                console.log(error.message);
            })
    }



    deletePlaylist = (id) => {
        if (window.confirm('Tem certeza que deseja deletar?')) {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "Gustavo-Monteiro-Freire"
            }
        }).then((res) => {
            alert ('Playlist deletada com sucesso!')
        this.getPlaylists()
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
        const listPlay = this.state.playlist.map((play) => {
            return  <CardUsuario  key={play.id}>{play.name}
            <button onClick={() => this.deletePlaylist(play.id)}>x</button>
            </CardUsuario>
        })
        return (
            <div>
                    <h3>Gêneros Salvos</h3>
                    {listPlay}

            </div>

        )
    }
}