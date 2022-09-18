import { app } from "./app"
import CreateUser from "./endpoints/User"

const createUser = new CreateUser()

app.post("/create-user", createUser.create)

