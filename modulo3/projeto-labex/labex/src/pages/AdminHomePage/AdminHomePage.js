import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import {goToCreateTripPage, goToHomePage} from "../../routes/Coordinator"
import {AdminStyled, ButtonsHome} from '../AdminHomePage/AdminHomePageStyled'

const AdminHomePage = () =>  {

  const navigate = useNavigate()
  useProtectedPage()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo/trips`, {
      headers: {
        // apaguei o token de autenticação e vou deixar no local storage
        auth: token
      }
    }) 
    .then((resp) => {
      console.log(resp.data)
    }).catch((error) => {
      console.log('Deu erro: ',error.message)
    })
  }, [navigate])




  return (
    <AdminStyled >
      <h2> Painel Administrativo </h2>
      <ButtonsHome>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      </ButtonsHome>
    </AdminStyled>
  );
}

export default AdminHomePage;
