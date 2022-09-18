import { Request, Response } from "express";
import UserData from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import IdGenerator from "../services/IdGenerator";
import  User  from "../model/User";
import HashManager from "../services/HashManager";

class UserEndpoint {
   async create(req:Request, res:Response) {
      try{
         const { name, email, password } = req.body

         if(!name || !email || !password) {
            throw new MissingFields()
         }

         if(password.length < 6 ) {
            throw new Error("A senha deve conter no mínimo 6 caracters!");
            
         }

         const userData = new UserData()

         const emailAlredyExist = await userData.getUserByEmail(email)

         if(emailAlredyExist) {
            throw new Error("Email já cadastrado");
            
         }

         const id = new IdGenerator().idGenerator();
         const hashPassword = await new HashManager().hash(password)


         const user = new User(id, name, email, hashPassword)

         console.log(user);
         
      }catch (error:any) {
         res.status(error.statusCode || 500).send({message: error.message})
      }
   }
}

export default UserEndpoint;


