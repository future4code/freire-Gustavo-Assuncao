
class User {
    constructor(
        private id: string,
        private name: string, 
        private email: string, 
        private password: string,
    ){ }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }
}

export interface UserBD {
    id: string,
    name: string,
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

export default User;