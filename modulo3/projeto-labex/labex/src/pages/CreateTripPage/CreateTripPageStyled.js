import styled from "styled-components"

export const Title = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    h1 {
        font-family: 'DM Sans', sans-serif;
        color: #FF4500; 
        font-size: 35px;
        margin-top: 30px; 
        }

`

export const Create = styled.div`
    box-sizing: border-box; 
    font-family: 'DM Sans', sans-serif;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 


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


`
export const InputData = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;  

   select { 
        
        box-sizing: border-box; 
        font-family: 'DM Sans', sans-serif;
        margin-top: 15px;
        height: 40px;
        width: 35vw; 
        margin-bottom: 15px; 
    }

    input{
        box-sizing: border-box;
        width: 35vw; 
        display: flex;
        justify-content: space-around ;
        height: 40px;
        font-family: 'DM Sans', sans-serif;
   }

`
export const ButtonCreate = styled.div`
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