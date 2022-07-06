import React from "react";
import Bottons from "../Bottons/Bottons";
import * as C from './footerStyles'



const Footer = () => {

  return (
    <div>
        <C.FooterStyled>
          <Bottons />
        </C.FooterStyled>
    </div>
  )
} 
export default Footer;
