import styled from "styled-components"

export const ButtonsContainer = styled.div`
    display: flex; 
    box-sizing: border-box;
    gap: 2vw;
    font-family: 'DM Sans', sans-serif;

    button {
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
        cursor: pointer;
        width: 170px; 
        height: 40px;
        background-color: black; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        &:hover {
            background-color: #FF4500; 
        }
    }
    margin: 40px 0 0 0;
`

export const ListScreenContainer = styled.div`

    font-family: 'DM Sans', sans-serif;
    display: flex;
    margin: 0 auto; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    h1{
        color: #FF4500; 
        font-size: 40px ; 
    }
    h3 {
        margin-top: -20px;
        margin-bottom: 40px;
        font-size: 20px ; 
        font-weight: lighter; 
    }

   

`
export const ConfCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 80px;


@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    margin: 0 auto;
  }
`
