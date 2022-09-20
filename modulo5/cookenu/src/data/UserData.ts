import { Console } from "console";
import User, { UserBD } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

class UserData extends BaseDataBase {

    private static tableName = "user_cookenu"

    async getUserByEmail(email: string):Promise<User | undefined>{
        const result = await this.getConnetion()
            .select("*")
            .from(UserData.tableName)
            .where({ email })

                if(!result.length){
                    return undefined
                }

            return new User(result[0].id,result[0].name,result[0].email,result[0].password)
    }
    async getUserById(id: string): Promise<UserBD> {

        const result = await this.getConnetion()
            .select("*")
            .from(UserData.tableName)
            .where({ id })

        const user: UserBD = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email
        }
        console.log(user)
        return user
    }


    async createUser(user:User):Promise<string>{

        await this.getConnetion().insert({
            id:user.getId(), 
            email:user.getEmail(),
            name:user.getName(),
            password:user.getPassword()
        }).into(UserData.tableName)

        return `Usuário Cadastrado com sucesso`
    }

}

export default UserData;