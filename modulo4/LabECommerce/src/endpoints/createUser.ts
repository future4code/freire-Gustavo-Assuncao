import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { userInput, userInsert } from "../types";


export default async function createCharacter(req: Request,res: Response): Promise<void> {

    try {
        const { name, email, password }:userInput = req.body

        if (!name || !email || !password) {
            throw new Error("O nome, email, password devem ser passados!");
        }

        const userInsert: userInsert ={
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password
        }

        const answer = await insertUser(userInsert)
        
        res.status(201).send({message:answer})

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}
