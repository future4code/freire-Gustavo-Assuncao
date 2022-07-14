import React from "react";
import about from '../../assets/sobre.png'
import styled from "styled-components";

const AboutStyled = styled.div`
display: flex; 

img { 
  width: 65vw; 
  margin: 0 auto; 
}
`


const AboutPage = () =>  {
  return (
    <AboutStyled >
       <img src={about} alt='placa com logomarca' width={70} />
    </AboutStyled>
  );
}

export default AboutPage;
