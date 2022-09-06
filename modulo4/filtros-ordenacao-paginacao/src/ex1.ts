import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers`)
.then(res=> res.data)
    .then(console.log)

console.log("Freire - fazendo outras coisas")

