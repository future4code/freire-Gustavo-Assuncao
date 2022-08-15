import styled from "styled-components";


export const AdminStyled = styled.div`
    font-family: 'DM Sans', sans-serif;
    margin-top: 30px; 
    box-sizing: border-box;
    display: flex; 
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 35px; 
        color: #FF4500; 
    };

`

export const ButtonsHome = styled.div`
    display: flex; 
    box-sizing: border-box;
    gap: 1vw;
    
    button {
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
        cursor: pointer;
        width: 150px; 
        height: 45px;
        background-color: black; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        &:hover {
            background-color: #FF4500; 
        }
    }

`;