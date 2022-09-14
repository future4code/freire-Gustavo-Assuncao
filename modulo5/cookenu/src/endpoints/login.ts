
import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";


export default async function login(
   req: Request,
   res: Response
): Promise<void>{
    try {

        const {email,password} = req.body

        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha seu email e senha")
        }

        const [user] = await connection('to_do_list_users').where({email})

        if(!user || user.password !==password){
            res.statusCode = 409
            throw new Error("Credencias inválidas")
        }
        // Criando um token: verifique que a informação que vai ser inserida no token é: 
        // user.id. Mas, o generateToken pede seu parâmetro no formato AuthenticatorData (id)
        // sendo assim, passamos ele como ({id: user.id})
        
        const newToken = new Autheticator()
        const token = newToken.generateToken({id: user.id})

        res.status(200).send(token)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }

}

// Informar email e senha 
// Retornar um token de autenticação caso as credenciais sejam válidas, 
// ou uma mensagem de erro caso contrário 