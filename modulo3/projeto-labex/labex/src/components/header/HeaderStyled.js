import styled from "styled-components";

export const  HeaderStyles = styled.div`
height: 10vh;  
display: flex;
align-items: center; 
justify-content: space-between;
/* padding-right: 5vw;  */
background-color: black; 

@media screen and (min-device-width: 320px) and (max-device-width: 667px) {
    display: flex;
    justify-items: center;
    text-align: center;
    width: 700px; 

  }

img { 
    display: flex; 
    height: 10vh; 
    padding-left: 9vw; 
    cursor: pointer;
}

button {
    margin-right: 3vw;
    justify-content:space-around; 
    font-family: 'DM Sans', sans-serif; 
    font-size: 15px; 
    color: white;
    border-style: none;
    background-color: black; 
 
    cursor: pointer;
    :hover {
            color: #FF4500; 
        }
}

@media screen and (min-device-width: 320px) and (max-device-width: 667px) {
    margin-right: 0;
    
  }


`

export const ButtonHeader = styled.div `
//criado para poder estilizar os buttons

`