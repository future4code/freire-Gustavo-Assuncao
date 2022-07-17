import styled from "styled-components"

export const ApplicationScreenContainer = styled.div`
    box-sizing: border-box; 
    font-family: 'DM Sans', sans-serif;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 


    h1 {
        color: #FF4500; 
        font-size: 35px;
        margin-top: 30px; 
    }

    input { 
    box-sizing: border-box; 
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 40px;
    margin-top: 15px; 
    }


    select { 
        height: 40px;
        box-sizing: border-box; 
        font-family: 'DM Sans', sans-serif;
        margin-top: 15px;
        width: 35vw; 
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;

        input {
            width: 400px; 
        }

        select {
            width: 400px; 
        }

}

`
export const ButtonsContainer = styled.div`
        
        display: flex; 
        justify-content: center; 
        gap: 20px; 

button { 
    font-family: 'DM Sans', sans-serif;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;  
    margin: 40px 0;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
    cursor: pointer;
    width: 170px; 
    height: 50px;
    background-color: black; 
    color: white; 
    font-family: 'DM Sans', sans-serif;

    &:hover {
    background-color: #FF4500;
}

}

`