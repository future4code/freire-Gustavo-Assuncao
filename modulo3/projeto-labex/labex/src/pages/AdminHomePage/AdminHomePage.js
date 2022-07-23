import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';
import { useNavigate } from 'react-router-dom';
import {goToCreateTripPage, goToHomePage} from "../../routes/Coordinator";
import { logout } from "../../services/requests";
import {AdminStyled, ButtonsHome} from '../AdminHomePage/AdminHomePageStyled';
import useRequestData from "../../hooks/useRequestData"
import AdminTripCard from "../../components/AdminTripCard/AdminTrip"

const AdminHomePage = () =>  {
  useProtectedPage()
  const navigate = useNavigate()
  const [tripsData, getTrips] = useRequestData("/trips", {})

  const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
    return <AdminTripCard key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
})

  return (
    <AdminStyled >
      <h2> Painel Administrativo </h2>
      <ButtonsHome>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => logout(navigate)}>Logout</button>
      </ButtonsHome>
      {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
    </AdminStyled>
  );
}

export default AdminHomePage;
