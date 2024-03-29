import knex from "knex"
import Knex from "knex"
import dotenv from "dotenv"
dotenv.config()

// classe molde , onde a funcao getConnection vai ser chamada pelas filhas
export abstract class BaseDataBase{

    private static connection:Knex | null = null

    protected getConnetion():Knex{
        if(!BaseDataBase.connection){
            BaseDataBase.connection = knex({
                client:"mysql",
                connection:{
                    host:process.env.DB_HOST,
                    user:process.env.DB_USER,
                    password:process.env.DB_PASSWORD,
                    database:process.env.DB_SCHEMA  
                }
            })
        }

        return BaseDataBase.connection
    }
}
