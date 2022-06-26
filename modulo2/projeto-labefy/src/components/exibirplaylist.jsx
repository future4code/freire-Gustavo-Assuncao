import React from "react";
import axios from "axios";
import styled from "styled-components";


// const CardUsuario = styled.div`
//       color: green;
//        padding: 10px;
//        width: 300px;
//        display:flex;
//        justify-content: space-between;
//        `

export default class ExibirPlaylist extends React.Component {
    state={
        list: [
            {
                id: "",
                genero: ""
            }
        ]
    }
    componentDidMount() {
        this.atualizarList()
      }
    //   componentDidMount() {
    //     this.atualizarId()
    //   }
    //   componentDidMount() {
    //     this.atualizarGenero()
    //   }
    atualizarList = () => {
        const novaList = [...this.state.list, ""];
        this.setState({ list: novaList })
    }

    // atualizarId = (event) => {
    //     this.setState({ id: event.target.value })
    // }

    // atualizarGenero = (event) => {
    //     this.setState({ genero: event.target.value })
    // }
    mostrarPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            list: [
                {
                    id: this.state.id,
                    name: this.state.genero
                }
            ]
        };
        axios.get(url,body, {
            headers: {
                Authorization: "Gustavo-Monteiro-Freire"
            }
        }).then((res)=>{
            this.setState({ list: res.data })
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
    }

    render () {
        const listaUsuarios = this.state.list.map((play) => {
          return <li key={play.id}>{play.genero}</li>
        })
        return (
            <div>
                <p>OIIIII</p>
                <ul>{listaUsuarios}</ul>
            </div>
        
        )
    }
}