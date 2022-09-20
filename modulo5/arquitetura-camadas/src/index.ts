import { app } from "./controller/app";
import UserController from "./controller/UserController";
import RecipeEndpoint from "./endpoints/Recipe";
import UserEndpoint from "./endpoints/User";


// const userEndpoint = new UserEndpoint()
// const recipeEndpoint = new RecipeEndpoint()


const userController = new UserController()


app.post("/criar-usuario",userController.create)


app.post("/login",userController.login)
app.get("/user/profile",userController.getProfile)
// app.post("/userFollow/follow",userEndpoint.followUser)
// app.post("/userUnFollow/unfollow",userEndpoint.unfollowUser)
// app.get("/user/:id",userEndpoint.getAnotherProfile)
// app.get("/feed-recipe",userEndpoint.feed)
// app.delete("/deletar-conta/:id",userEndpoint.deleteAccount)

// app.post("/criar-receita",recipeEndpoint.create)
// app.get("/recipe/:id",recipeEndpoint.searchRecipe)
// app.put("/editar-receita/:id",recipeEndpoint.editRecipe)
// app.delete("/deletar-receita/:id",recipeEndpoint.deleteRecipe)