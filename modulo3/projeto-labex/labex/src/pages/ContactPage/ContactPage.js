import React from "react";
import contact from '../../assets/contact.jpg'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

const ContactStyled = styled.div`
box-sizing: border-box;
    flex-direction: column; 
    box-sizing: border-box;
    margin-top: 5vh;  
    margin-left: 19vw; 
    font-family: 'DM Sans', sans-serif;
    
    h1 {
        margin-top: 110px; 
        margin-bottom: -10px;
        font-size: 45px; 
        color: #FF4500; 
    };

    p {
        width: 35vw;
        font-size:22px; 
        margin-bottom: 10vh;
        
    };

    button {
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
        cursor: pointer;
        width: 200px; 
        height: 50px;
        background-color: black; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        &:hover {
            background-color: #FF4500; 
        }
      }
`

export const ImgContact = styled.div`
    box-sizing: border-box; 
    display: flex; 
    flex-direction: row; 

    img {
        width: 45vw; 
        position: initial;
        display: flex;  
        margin: -450px 0 0 450px; 
        z-index:-1;
    };
`


const ContactPage = () =>  {
    const navigate = useNavigate( )

    const goToAboutUs = () => {
      navigate('/aboutUs')
    }

  return (
    <ContactStyled >
      <h1><strong> CONTACT</strong> US</h1>
      <p>Ainda está com dúvidas em comprar com a gente? Conheça mais sobre a gente e já realize a sua inscrição que entraremos em contato para tirar todas as dúvidas. </p>
      <button onClick={goToAboutUs}>SOBRE NÓS</button>
      <ImgContact>
       <img src={contact} alt='placa com logomarca' width={70} />
       </ImgContact>
    </ContactStyled>
  );
}

export default ContactPage;
