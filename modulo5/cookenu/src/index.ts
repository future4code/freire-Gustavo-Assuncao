import { app } from "./app"
import UserEndpoint from "./endpoints/User"

const userEndpoint = new UserEndpoint()

app.post("/criar-usuario", userEndpoint.create)

