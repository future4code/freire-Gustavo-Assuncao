import app from "./app";
import  createCharacter  from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import  getAllCharacters  from "./endpoints/getAllCharacters"

app.get("/characters", getAllCharacters)
app.put("/characters", createCharacter) 
app.delete("/characters/:id", deleteCharacter)