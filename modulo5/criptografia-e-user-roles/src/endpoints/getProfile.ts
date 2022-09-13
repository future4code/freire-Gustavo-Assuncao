import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function getProfile (req:Request, res:Response) {
try{
    const token= req.headers.authorization

    if (!token){
        res.statusCode = 409
        throw new Error("Tonken não enviado")
    }

    const authenticator = new Autheticator()
    const tokenData = authenticator.getTokenData(token)

    const [user] = await connection('to_do_list_users')
    .where({id: tokenData.id})

    res.status(200).send({
        user

    })
            }catch (error:any){
                res.status(res.statusCode).send(error.message)
            } 

    
}