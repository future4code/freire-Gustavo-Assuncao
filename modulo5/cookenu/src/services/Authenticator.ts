import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"
// import { USER_ROLES } from "../model/User";

dotenv.config()

interface TypeUser {
    id:string,
    // role:USER_ROLES
}

 class Authenticator {


    public generateToken =  (payload:TypeUser)=>{
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
            )
            return token 
    }

    public getTokenData= (token:string):TypeUser =>{
        const tokenData = 
        jwt.verify(
            token,
            process.env.JWT_KEY as string) as TypeUser
        return tokenData 
           }
    
}

//     generateToken(typeUser: TypeUser): string {

//         const token = jwt.sign(
//             {
//                 typeUser
//             },
//             process.env.JWT_KEY as string,
//             { expiresIn: process.env.JWT_EXPIRATION_TIME }
//         )
//         return token;
//     }

//     getTokenData(token: string){

//         const payload = jwt.verify(token,process.env.JWT_KEY as string) as any

//         return payload.typeUser

//     }
// }

export default Authenticator;