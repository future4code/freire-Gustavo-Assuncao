import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {v4} from "uuid"
import { Autheticator } from "./services/Authenticator"
import { AuthenticationData } from "./types"
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"
import getProfile from "./endpoints/getProfile"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)
app.get ('/user/profile', getProfile)


// Refatore sua aplicação, de maneira que ela comporte diferentes 
// categorias de usuários. Os requisitos são:

// Front deve informar um role ("NORMAL" ou "ADMIN") no endpoint de cadastro

// Essa informação deve ser guardada tanto no banco quanto nos tokens 
// gerados no cadastro e no login


// Somente usuários ADMIN podem acessar o endpoint de editar usuário  




// const testandoHash =async() =>{

//     const password = "labenu"
//     const passwordTentativa ="labenu2"

//     const instanceHash = new HashManager()
//     const hash = await instanceHash.hash(password)
//     console.log("HASH -----> ",hash)

//     const compareHash:boolean = await instanceHash.compareHash(passwordTentativa,hash)
    
//     if(!compareHash){
//         console.log("Credenciais inválidas")
//     }else {
//         console.log("LOGADO COM SUCESSO")
//     }


// }
// testandoHash()




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
