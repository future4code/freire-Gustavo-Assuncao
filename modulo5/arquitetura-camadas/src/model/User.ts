export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

class User {
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private senha: string,
        private role:USER_ROLES
    ) { }

    getId() {
        return this.id
    }

    getNome() {
        return this.nome
    }

    getEmail() {
        return this.email
    }

    getSenha() {
        return this.senha
    }

    getRole(){
        return this.role
    }
}

export interface UserBD {
    id: string,
    nome: string,
    email: string
}

export interface feedDB {
    id:string,
    title: string,
    description:string,
    createdAt:string,
    userId: string,
    userName: string
}

export interface userDTO {
    nome:string,
    email:string,
    senha:string,
    role:USER_ROLES
}

export default User