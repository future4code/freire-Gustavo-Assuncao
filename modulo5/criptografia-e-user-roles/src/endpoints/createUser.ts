import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role} = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }
      //verificar se o email já foi cadastrados
      const [user] = await connection('to_do_list_users')
         .where({ email })
   
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      //Instaciamos a classe e geramos uma id com uuid
      const uuidClass = new GenerateId()
      const id:string = uuidClass.generateId()
      
      //Hasheando o valor
      const instanceHash = new HashManager()
      const hash = await instanceHash.hash(password)

      const newUser: user = { 
         id, 
         name, 
         nickname, 
         email, 
         password:hash,
         role }

      await connection('to_do_list_users')
         .insert(newUser)
      //Aqui nos geramos um token para o novo user. Observe que o id tem o mesmo
      //nome do id gerado pelo uuid (const id), sendo assim, podemos colocar:
      // ({id}). Se sua variável for diferente, consulte login.ts para ver como fica

      
      const newToken = new Autheticator()
      const token = newToken.generateToken({id, role})

      res.status(201).send({ newUser,token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}