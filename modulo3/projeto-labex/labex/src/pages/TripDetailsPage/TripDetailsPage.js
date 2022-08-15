import React from "react";
import { goToAdminHomePage } from '../../routes/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useNavigate, useParams } from 'react-router-dom'
import CandidateCard from '../../components/CandidateCard/CandidateCard'
import { TripDataContainer, TripScreenContainer } from "./TripDetailsPageStyled"


const TripDetailsPage = () =>  {
  useProtectedPage()
  const navigate = useNavigate()
  const { id } = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

  const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((cand) => {
      return <CandidateCard key={cand.id} candidate={cand} tripId={id} getTripDetails={getTripDetails} />
  })

  const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((cand) => {
      return <li key={cand.id}>{cand.name}</li>
  })


  return (
    <TripScreenContainer>

    {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
    {tripDetails && tripDetails.trip && <TripDataContainer>
        <p><b>Nome:</b> {tripDetails.trip.name}</p>
        <p><b>Descrição:</b> {tripDetails.trip.description}</p>
        <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
        <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
        <p><b>Data:</b> {tripDetails.trip.date}</p>
    </TripDataContainer>}
    <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>

    <h2>Candidatos Pendentes</h2>
    {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

    <h2>Candidatos Aprovados</h2>
    {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
</TripScreenContainer>
  );
}

export default TripDetailsPage;