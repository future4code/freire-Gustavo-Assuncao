import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers/idInvalido/notifications`)
.then(res =>res.data)
.then(console.log)
.catch( error=> error.response?.data || error.message) 
.then(console.log)

console.log("Freire - fazendo outras coisas")