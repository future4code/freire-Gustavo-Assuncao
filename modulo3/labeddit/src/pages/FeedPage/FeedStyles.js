import styled from "styled-components";


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
    border: 1px solid #F59A73;
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
    border: 1px solid #F59A73; 
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

  // editar forms e criar posts


export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 40vw;
min-width: 70vw;
align-items: center;
margin: 30px auto; 
box-sizing: border-box;
border: 1px solid #b2dfdb; 
padding: 10px 10px 10px 10px; 
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
border-radius: 12px;
background: #FBFBFB;


button {
  height: 50px; 
  margin-top: 10px; 
  box-sizing: border-box;
  min-width: 60vw; 
  margin-bottom: 3%; 
}
`

export const ContainerText = styled.div`
  input { 
    min-height: 100px; 
    min-width: 60vw; 
    box-sizing: border-box; 
    word-wrap: break-word;
  }
`
export const ContainerTitle = styled.div`
  input { 
    min-height: 50px; 
    min-width: 60vw; 
    box-sizing: border-box; 
  }


`
