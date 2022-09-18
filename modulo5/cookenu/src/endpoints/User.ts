import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";

class CreateUser {
   async create(req:Request, res:Response) {
      try{
         const { name, email, password } = req.body

         if(!name || !email || !password) {
            throw new MissingFields()
         }

         if(password.length < 6 ) {
            throw new Error("A senha deve conter no mínimo 6 caracters!");
            
         }

      }catch (error:any) {
         res.status(error.statusCode || 500).send({message: error.message})
      }
   }
}

export default CreateUser;


