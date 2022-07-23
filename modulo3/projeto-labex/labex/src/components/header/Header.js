import React from "react";
import { HeaderStyles, ButtonHeader } from "./HeaderStyled";
import logomarca from "../../assets/logomarca.png"
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAboutUs, goToContactUs  } from "../../routes/Coordinator";


const Header = () =>  {
  const navigate = useNavigate()

  return (
    <>
    <HeaderStyles >
      <img src={logomarca} onClick={() => goToHomePage(navigate)} alt='logomarca - astronauta em um foguete'/>
       <ButtonHeader>
        <button onClick={() => goToHomePage(navigate)}>HOME</button>
        <button onClick={() => goToAboutUs(navigate)}>SOBRE</button>
        <button onClick={() => goToContactUs(navigate)}>CONTATO</button>
        </ButtonHeader> 
    </HeaderStyles>
    </>
  );
}

export default Header;