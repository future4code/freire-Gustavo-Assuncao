import { Request, Response } from "express";
import UserData from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import IdGenerator from "../services/IdGenerator";
import  User  from "../model/User";
import HashManager from "../services/HashManager";
import Authenticator from "../services/Authenticator";

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

         const response = await userData.createUser(user)

         const token = new Authenticator.generateToken(id)

         res.status(201).send({message:response, token})

      }catch (error:any) {
         res.status(error.statusCode || 500).send({message: error.message})
      }
   }

   async login(req:Request, res:Response) {
      try {
         const { email, password} = req.body

         if (!email || !password) {
            throw new MissingFields();
         }

         const userData = new UserData()

         const userDB = await userData.getUserByEmail(email)

         if(!userDB) {
            throw new Error("Email não cadastrado na aplicação")
         }

         const correctPassword = await new HashManager().compare(password,userDB.getPassword())

         if(!correctPassword) {
            throw new Error("A senha está incorreta!");
         }

         const token = new Authenticator().generateToken({id: userDB.getId()})

         res.status(200).send({message: "Usuário logado com sucesso", token})

      } catch (error:any) {
         res.status(error.statusCode || 500).send({message: error.message})
      }
   }

}

export default UserEndpoint;


