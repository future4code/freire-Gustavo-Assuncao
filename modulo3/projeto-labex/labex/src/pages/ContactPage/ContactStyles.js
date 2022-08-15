import styled from "styled-components";

export const ContactStyled = styled.div`
box-sizing: border-box;
    flex-direction: column; 
    box-sizing: border-box;
    margin-top: 5vh;  
    margin-left: 19vw; 
    font-family: 'DM Sans', sans-serif;
    
    h1 {
        margin-top: 110px; 
        margin-bottom: -10px;
        font-size: 40px; 
        color: #FF4500;
    }

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
        width: 30vw; 
        position: initial;
        display: flex;  
        margin: -350px 0 0 520px; 
        z-index:-1;
    };
`