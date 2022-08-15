// type Aliaser
type Persona = {
    id: string, 
    name: string,
    email: string, 
    password: string, 
    role: Role
}

type AdminAccount = {
    account: string, 
    permission: boolean
}

type NormalAccount = {
    account: string, 
    permission: boolean
}
// criar enum para roles
enum Role {
    ADMIN = "Admin",
    NORMAL = "Normal"
}

type AdminUser = Persona & AdminAccount 
type NormalUser = Persona & NormalAccount 

type Users = AdminUser[] & NormalUser[]

const userOne: AdminUser = {
    id: "2",
    name: "Jorge",
    email: "jorge@gmail.com",
    password: "123asda",
    role: Role.ADMIN,
    account: "accountAdmin",
    permission: true 
}

const userTwo: NormalUser = {
    id: "3",
    name: "Marcos",
    email: "marcos@gmail.com",
    password: "7456sdsfa",
    role: Role.NORMAL,
    account: "accountNormal",
    permission: false 
}

const arrayUsers: Users = [userOne, userTwo]
