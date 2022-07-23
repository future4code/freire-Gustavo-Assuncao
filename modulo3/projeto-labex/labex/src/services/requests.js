import axios from "axios"; 
import { BASE_URL } from "../constants/urls"
import { goToAdminHomePage, goToLoginPage } from "../routes/Coordinator";

// aqui coloco todas as minhas requisições para acessar nas páginas

export const sendApplication = (body, tripId, clear) => {
    axios.post (`${BASE_URL}/trips/${tripId}/apply`, body)
    .then(() => {
        alert("Aplicação enviada com sucesso!")
        clear()
    })
    .catch((err) => alert(err.response.message))
}

export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=> {
        localStorage.setItem("token", res.data.token)
        goToAdminHomePage(navigate)
    })
    .catch((err)=> alert(err.response.data.message))
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada!")
        getTrips()
    })
    .catch((err) => alert(err.response.data.message))
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Decisão registrada!")
        getTripDetails()
    })
    .catch((err) => alert(err.response.data.message))
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem adicionada!")
        clear()
    })
    .catch((err) => alert(err.response.data.message))
}