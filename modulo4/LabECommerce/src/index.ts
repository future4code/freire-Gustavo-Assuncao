import app from "./app";
import  createUser  from "./endpoints/createUser";
import getAllUsers from "./endpoints/getUsers";


app.post("/users", createUser)
app.get("/users", getAllUsers)
