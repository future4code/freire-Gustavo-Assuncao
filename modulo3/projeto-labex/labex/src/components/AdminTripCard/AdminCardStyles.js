import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 440px;
    &:hover{
        cursor: pointer;
        box-shadow: 0 4px 8px 0 #FF4500;
    }

`

export const DeleteButton = styled.div`
    padding: 10px;
    color: slategray;
    background-color: red;
    border-radius: 25px;
    color: darkred;
    cursor: pointer;
`