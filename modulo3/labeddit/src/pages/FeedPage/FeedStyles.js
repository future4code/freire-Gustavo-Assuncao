import styled from "styled-components";


//criarPosts










//posts
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 30px; 
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 5px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    width: 70%;
    height: auto;
    background: #FBFBFB;
    border: 1px solid #b2dfdb;
    border-radius: 12px;

    p {
        font-size: 10px;
        color: gray;
        margin-left: 5px; 
    }

    h3 {
        font-weight: lighter;
        width: 80%; 
        word-wrap: break-word;
        color: #111111; 
        margin-left: 5px; 
    }
`

export const RoundedBox = styled.div`
    border: 1px solid #b2dfdb; 
    border-radius: 15px;
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 1px 15px;
  
    p { 
    margin-left: 5px;
    font-size: 15px; 
    }

    svg {
    height: 17px; 
    align-items: center;
    justify-content: center;
    color: grey; 
    margin-right: -5px; 
    cursor: pointer; 
  }

`

export const RoundedBoxContainer = styled.div`
    margin-left: 3px; 
    margin-bottom: 5px; 
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    height: 20px;
    gap: 10px; 
  `