import { Request, Response } from "express";
import { connection } from "../connection";

export default async function deleteCharacter(
    req: Request,
    res: Response
): Promise<void>{

    try {
        const { id } = req.params
        // const index:number = characters.findIndex(
        //     character => character.id === Number(id)
        // )
        // if(index > -1) characters.splice(index, 1)
        res.status(200).end()

        await connection("characters")
        .delete()
        .where({id:id})

    } catch (error) {
        res.status(500).end()
    }
}