import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {v4} from "uuid"
import { Autheticator } from "./services/Authenticator"
import { AuthenticationData } from "./types"
import login from "./endpoints/login"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)


//ex4 
// Os requisitos são:
// O caminho deve ser: "/user/login"
// O método é POST
// Informar email e senha 
// Retornar um token de autenticação caso as credenciais sejam válidas, 
// ou uma mensagem de erro caso contrário 


// Ex2
// Crie uma classe Authenticator, contendo os métodos 
// generateToken e getTokenData, para implementar os métodos 
// sign e verify, respectivamente

// Crie um type AuthenticationData para representar o payload do seu token

// const id: AuthenticationData = {id: "br"}
// const tokenInstaciado = new Autheticator()
// const token = tokenInstaciado.generateToken(id)
// console.log("TOKEN:     ",token)

// const tokenData = tokenInstaciado.getTokenData(token)
// console.log("TOKEN DATA:   ",tokenData)


// Refatorar o endpoint de cadastro para incluir um fluxo de autenticação. 

// Os requisitos são:
// O caminho deve ser "/user/signup"
// O usuário precisa escolher uma senha ao se cadastrar 
// O usuário deve receber um identificador no padrão UUID
// A resposta deve ter um corpo contendo um token de autenticação
