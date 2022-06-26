import React from "react";
import axios from "axios";
import styled from "styled-components";


const CardUsuario = styled.div`
      color: green;
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



    deletePlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistid`

        axios.del(url, {
            headers: {
                Authorization: "Gustavo-Monteiro-Freire"
            }
        }).then((resp) => {
            this.setState({ playlist: "" });
        })
            .catch((err) => {
                console.log(err.message);
            })
    }

    render() {
        const listaUsuarios = this.state.playlist.map((playlist) => {
            return <p key={playlist.id}>{playlist.name}</p>;
        })
        return (
            <div>
                <CardUsuario>
                    <h3>Gêneros Salvos</h3>
                    <ul>{listaUsuarios}</ul>
                    <button onClick={this.deletePlaylist} >x</button>
                </CardUsuario>
            </div>

        )
    }
}