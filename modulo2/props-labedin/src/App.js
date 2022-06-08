import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/cardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from "../src/img/fotoPerfil.png";
import down from "../src/img/down.png";
import styled from "styled-components";

const TituloPrincipal = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

// const Subtitulo = styled.h3`
//   text-align: center;
//   margin-bottom: 20px;
// `

const TelaCompleta = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const SecaoContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

function App() {
  return (
    <TelaCompleta>
      <SecaoContainer>
        <TituloPrincipal>Dados pessoais</TituloPrincipal>
        <CardGrande 
          imagem={fotoPerfil}
          nome="Gustavo Monteiro" 
          descricao="Oi, me chamo Gustavo, sou pai de pet e estou curtindo demais estar tendo contato com Desenvolvimento Web, estou aprendendo muito sobre lógica de programação. Diariamente me desafio em novos projetos e diferentes conteúdos para me tornar cada vez mais próximo de me tornar um ótimo Dev."
        />
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/2165/2165310.png"
        dado="E-mail:"
        informacao="monteirocontacto@gmail.com"
        />
        <CardPequeno
        imagem="https://img.icons8.com/ios/500/address--v1.png"
        dado="Endereço:"
        informacao="Maceió-Al"
        />
        <ImagemButton 
          imagem={down}
          texto="Ver mais"
        />
      </SecaoContainer>
      <SecaoContainer>
        <TituloPrincipal>Formação</TituloPrincipal>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso FullStack - front e back-end." 
        />
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLTVY22twk5dN_FaD-uqOd5ItmPOMA_C0wejA2__8g=s900-c-k-c0x00ffffff-no-rj" 
          nome="OneBitCode" 
          descricao="Javascript FullStack- front e back-end."
          
        />
      </SecaoContainer>
      <SecaoContainer>
        <TituloPrincipal>Experiências profissionais</TituloPrincipal>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1387431365851893762/8VR4awEa_400x400.jpg" 
          nome="Uol" 
          descricao="Desenvolvedor Front-end - 3 meses." 
        />
        
        <CardGrande 
          imagem="https://nubank.com.br/images/nu-icon.png?v=2" 
          nome="Nubank" 
          descricao="Desenvolvedor Front-end - 5 meses." 
        />
      </SecaoContainer>
      <SecaoContainer>
        <TituloPrincipal>Minhas redes sociais</TituloPrincipal>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SecaoContainer>
    </TelaCompleta>
  );
}

export default App;
