import styled from "styled-components";


export const LoginStyled = styled.div`
    margin-top: 50px; 
    box-sizing: border-box;
    display: flex; 
    align-items: center;
    flex-direction: column;
    font-family: 'DM Sans', sans-serif;
    
    h1 {
        font-size: 45px; 
        margin-bottom: -10px;
        align-items: center;
        color: #FF4500;
    }

   h3 {
    font-weight: lighter; 
    align-items: center;
    font-size: 22px; 
   }

    input {
        box-sizing: border-box;
        width: 300px; 
        height: 50px;
        font-family: 'DM Sans', sans-serif;
    }

    p {
        box-sizing: border-box;
        font-size: 14px;
        font-family: 'DM Sans', sans-serif;
        margin-bottom: 2px;
    };

    button {
        margin-top: 40px; 
        margin-left: 50px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
        cursor: pointer;
        width: 200px; 
        height: 50px;
        background-color: black; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        font-size: 15px; 
        &:hover {
            background-color: #FF4500; 
        }
      }
      

`

export const InputStyled = styled.div`

`