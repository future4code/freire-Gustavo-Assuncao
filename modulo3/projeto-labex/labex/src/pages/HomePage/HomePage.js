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
      <p> No LabeX você encontra pacotes de viagens espaciais que incluem aeronave de última geração, hospedagem com conforto, refeições personalizadas e até seguro viagem. Nossas aeronaves são as melhores existentes com tecnologia de ponta , temos os pilotos e copilotos mais experientes do mercado.</p>
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
