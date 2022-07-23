import React from "react";
import error from '../../assets/error.jpg'
import styled from "styled-components";

const ErrorStyled = styled.div`
display: flex; 

img { 
  width: 65vw; 
  margin: 0 auto; 
}
`


const ErrorPage = () =>  {
  return (
    <ErrorStyled >
       <img src={error} alt='dog e astronaulta - error 404' width={70} />
    </ErrorStyled>
  );
}

export default ErrorPage;
