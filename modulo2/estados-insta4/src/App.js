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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paula'}
          fotoUsuario={'https://picsum.photos/50/40'}
          fotoPost={'https://picsum.photos/200/130'}
        />

        <Post
          nomeUsuario={'Antonio'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/200/140'}
        />

        <Post
          nomeUsuario={'Marcos'}
          fotoUsuario={'https://picsum.photos/50/20'}
          fotoPost={'https://picsum.photos/200/151'}
        />
      </MainContainer>
    );
  }
}

export default App;
