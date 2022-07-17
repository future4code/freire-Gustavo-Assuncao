import styled from "styled-components";

export const HomeStyled = styled.div`
    box-sizing: border-box;
    flex-direction: row; 
    margin-top: 5vh;  
    margin-left: 19vw; 
    position:absolute; 
    font-family: 'DM Sans', sans-serif;
    
    h1 {
        margin-bottom: -20px;
        font-size: 40px; 
        color: #FF4500; 
    };

    h3 {
        margin-bottom: 5vh;
        font-size: 28px; 
        font-weight: lighter; 
    };
    
    p {
        width: 30vw;
        font-size:20px; 
        margin-bottom: 10vh;
        
    };


`;

export const ButtonsHome = styled.div`
    display: flex; 
    box-sizing: border-box;
    gap: 1vw;
    
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

`;

export const ImgHome = styled.div`
    box-sizing: border-box; 
    display: flex; 
    flex-direction: row; 

    img {
        width: 35vw; 
        position: initial;
        display: flex;  
        margin: -450px 0 0 500px; 
        z-index:-1;
    }

`