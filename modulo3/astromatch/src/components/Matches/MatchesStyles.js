import styled from "styled-components";

export const ListContainer = styled.div`
    width: 350px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    overflow: auto;
`

export const ListMenuBar = styled.div`
    height: 55px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;

    h1{
        color:  black;
        margin: 0 auto;
    }

    button{
        background: none;
        border: none;

        :hover{
            cursor:pointer;
            transform: scale(1.1);
            transition: all 0.5s;
        }
    }`

export const List = styled.ul`
    list-style-type: none;
    display: block;
    list-style-type: disc;
    padding-inline-start: 40px;

    li{
    position: relative;
    padding: 5px;
    display: flex;
    list-style: none;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    right: 25px;
    border-radius: 20px;
    background-color: #EFEFF4;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    p{
        margin-left: 15px;
        font: bold;
    }
`