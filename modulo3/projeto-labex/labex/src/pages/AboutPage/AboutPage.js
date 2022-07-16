import React from "react";
import about from '../../assets/sobre.png'
import {AboutStyled} from "./AboutSyles"


const AboutPage = () =>  {
  return (
    <AboutStyled >
        <h2>Sobre a LabeX</h2>
       <img src={about} alt='placa com logomarca' width={70} />
       <p> Somos uma agência de viagens, que começou com viagens nacionais e internacionais e logo após a nave Vostok 1, com o piloto Yuri Gagarin, em 12 de abril de 1961, há exatos 61 anos dar a primeira viagem ao espaço, iniciamos a nossa empresa participando ativamente de todo o processo e logo após decidimos estruturar todo o escopo de que nossa empresa oferece hoje.   </p>
    </AboutStyled>
  );
}

export default AboutPage;
