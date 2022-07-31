import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token) || sessionStorage.getItem("token"),
            clear()
            goToFeedPage(navigate)
        })
        .catch((err) => console.log(err.response.data.message))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signUp`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token) || sessionStorage.getItem("token"),
            clear()
            goToFeedPage(navigate)
        })
        .catch((err)=> alert(err.response.data.message))
}


