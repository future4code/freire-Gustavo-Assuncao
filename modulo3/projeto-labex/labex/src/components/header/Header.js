import React from "react";
import { HeaderStyles, ButtonHeader } from "./HeaderStyled";
import logomarca from "../../assets/logomarca.png"
import { useNavigate } from 'react-router-dom'


const Header = () =>  {
  const navigate = useNavigate()

    const goToHome = () => {
      navigate('/')
    }

    const goToAbout = () => {
      navigate('/AboutUs')
    }

    const goToContact = () => {
      navigate('/contactUs')
    }

  return (
    <HeaderStyles >
      <img src={logomarca} alt='logomarca - astronauta em um foguete'/>
       <ButtonHeader>
        <button onClick={goToHome}>HOME</button>
        <button onClick={goToAbout}>SOBRE</button>
        <button onClick={goToContact}>CONTATO</button>
        </ButtonHeader> 
    </HeaderStyles>
  );
}

export default Header;