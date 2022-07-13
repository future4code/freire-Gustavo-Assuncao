import React from "react";
import { HomeStyled, ButtonsHome, ImgHome } from "./HomeStyled";
import hello from '../../assets/hello.png'
import { useNavigate } from 'react-router-dom'

const HomePage = () =>  {
    const navigate = useNavigate()

    const goToListTrips = () => {
      navigate('/trips/list')
    }

    const goToLogin = () => {
      navigate('/login')
    }

  return (
    <HomeStyled >
      <h1> LabeX </h1>
      <h3> Encontre as melhores viagens espaciais! </h3>
      <p> No Decolar você encontra pacotes de viagens nacionais e internacionais que incluem passagens aéreas, hotéis, café da manhã, traslado e até seguro viagem com ...No Decolar você encontra pacotes de viagens nacionais e internacionais que incluem passagens aéreas, hotéis, café da manhã, traslado e até seguro viagem com ... </p>
    <ButtonsHome>
      <button onClick={goToListTrips}>VIAGENS DISPONÍVEIS</button>
      <button onClick={goToLogin}>ACESSO ADMIN</button>
    </ButtonsHome>
    
    <ImgHome>
      <img src={hello} alt='astronalta cumprimentando' />
    </ImgHome>
    </HomeStyled>
  );
}

export default HomePage;
