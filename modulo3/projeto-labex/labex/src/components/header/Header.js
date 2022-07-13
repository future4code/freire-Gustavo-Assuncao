import React from "react";
import { HeaderStyles, ButtonHeader } from "./HeaderStyled";
import logomarca from "../../assets/logomarca.png"


const Header = () =>  {


//  const goToHome = () => {
//       navigate('')
//     }

  return (
    <HeaderStyles >
      <img src={logomarca} alt='logomarca - astronauta em um foguete'/>
       <ButtonHeader>
        <button>HOME</button>
        <button>SOBRE</button>
        <button>CONTATO</button>
        </ButtonHeader> 
    </HeaderStyles>
  );
}

export default Header;