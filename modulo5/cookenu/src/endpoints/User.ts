import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";


class UserEndpoint {
   async create(req:Request, res:Response) {
      try{
         const { nome, email, senha } = req.body

         if(!nome || !email || !senha) {
            throw new MissingFields()
         }

      }catch (error:any) {
         res.status(error.statusCode || 500).send({message: error.message})
      }
   }
}

export default UserEndpoint;


