import React from 'react'
import TripCard from "../../components/TripCard/TripCard"
import useRequestData from "../../hooks/useRequestData"
import { goToHomePage, goToApplicationFormPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { ButtonsContainer, ListScreenContainer, ConfCard } from "./ListTripsPageStyled"

const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const navigate = useNavigate()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t} />
    })

    return (
        <ListScreenContainer>
            <ButtonsContainer>
                <button onClick={() => goToHomePage(navigate)}>VOLTAR</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>INSCREVER-SE</button>
            </ButtonsContainer>
            <h1>Lista de Viagens</h1>
            <ConfCard>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            </ConfCard>
        </ListScreenContainer>
    )
}

export default ListTripsPage