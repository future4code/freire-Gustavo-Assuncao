import React from "react";
import contact from '../../assets/contact.jpg'
import {ContactStyled, ImgContact } from "./ContactStyles"
import { useNavigate } from 'react-router-dom'
import { goToAboutUs } from "../../routes/Coordinator";

const ContactPage = () =>  {
    const navigate = useNavigate( )
    
  return (
    <ContactStyled >
      <h1>Contato</h1>
      <p>Ainda está com dúvidas em comprar com a gente? Conheça mais sobre nós e já realize a sua inscrição que entraremos em contato para tirar todas as dúvidas. </p>
      <button onClick={ () => goToAboutUs(navigate)}>SOBRE NÓS</button>
      <ImgContact>
       <img src={contact} alt='placa com logomarca' width={70} />
       </ImgContact>
    </ContactStyled>
  );
}

export default ContactPage;
