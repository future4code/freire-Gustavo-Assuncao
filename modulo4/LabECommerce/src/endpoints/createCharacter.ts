import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createCharacter(
    req: Request,
    res: Response
): Promise<void> {

    try {

        // aqui fiz desestruturação
        const { name, gender, description } = req.body
        
        console.log(req.headers["content-type"])

        // characters.push({
        //     id:Date.now(),
        //     name,
        //     gender,
        //     description
        // })

        await connection("characters")
        .insert({name, gender, description})

 // como é put e não tem body eu posso retornar .end
        res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }


}
