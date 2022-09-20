import { Request, Response } from "express"
import UserBussines from "../bussines/UserBussines"
import { userDTO } from "../model/User"

class UserController{

    async create(req: Request, res: Response) {
        try {
            const { nome, email, senha, role } = req.body

            const userBussines = new UserBussines()

            const user:userDTO = {
                nome,
                email,
                senha,
                role
            }

            const token =  await userBussines.create(user)

            res.status(201).send({ message:token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response){
        try {
            const { email,senha} = req.body

            const userBussines = new UserBussines()

            const token =  await userBussines.login(email,senha)

            res.status(201).send({ message:token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getProfile(req: Request, res: Response){
        try {
            const tokenUser = req.headers.authorization as string

            const userBussines = new UserBussines()
            
            const userProfile =  await userBussines.getProfile(tokenUser)

            res.status(201).send({ User:userProfile })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserController