import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'


const TripDetailsPage = () =>  {
  const navigate = useNavigate()
  useProtectedPage()

  useEffect((id)=>{
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo/trip/${id}`, {
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
    <div >
      <h3> Testando TripDetailsPage </h3>
    </div>
  );
}

export default TripDetailsPage;