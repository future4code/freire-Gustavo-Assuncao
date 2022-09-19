import { app } from "./app"
import UserEndpoint from "./endpoints/User"

const userEndpoint = new UserEndpoint()

app.post("/create-user", userEndpoint.create)
app.post("/login", userEndpoint.login)
