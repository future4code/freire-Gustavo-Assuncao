import { Request, Response } from "express"
import { connection } from "../connection"
import { userInsert } from "../types"

export default async function getAllCharacters (req: Request,res: Response): Promise<void>{

        try {
        const name = req.query

        const getUsers = await connection("labecommerce_users")
        res.status(200).send(getUsers)

        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
     }