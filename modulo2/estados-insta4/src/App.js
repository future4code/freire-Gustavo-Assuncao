import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoas: [

      {
        nomeUsuario:'Paula',
        fotoUsuario:'https://picsum.photos/50/40',
        fotoPost:'https://picsum.photos/200/130'
      },
      {
        nomeUsuario:'Antonio',
        fotoUsuario:'https://picsum.photos/50/30',
        fotoPost:'https://picsum.photos/200/140'
      },
      {
      nomeUsuario:'Marcos',
      fotoUsuario:'https://picsum.photos/50/30',
      fotoPost:'https://picsum.photos/200/140',
      }
    ]
  };

  render() {

const listaDeUsuarios = this.state.pessoas.map((usuarios) => {
  return (
    <p>{usuarios.nomeUsuario} - {usuarios.fotoUsuario} - {usuarios.fotoPost}</p>
  );
});
    return (
      <MainContainer>
        <Post
          {...listaDeUsuarios}
        />

        <Post
          {...listaDeUsuarios}
        />

        <Post
          {...listaDeUsuarios}
        />
      </MainContainer>
    );
  }
}

export default App;
