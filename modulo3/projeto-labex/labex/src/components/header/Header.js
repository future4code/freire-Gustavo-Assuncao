import React from "react";
import { HeaderStyles, ButtonHeader } from "./HeaderStyled";
import logomarca from "../../assets/logomarca.png"

const Header = () =>  {
  return (
    <HeaderStyles >
      <img src={logomarca} alt='logomarca - astronauta em um foguete'/>
       <ButtonHeader>
        <button>HOME</button>
        <button>CONTATO</button>
        <button>SOBRE</button>
        </ButtonHeader> 
    </HeaderStyles>
  );
}

export default Header;