import { Request, Response } from "express";
import moment from "moment";
import RecipeData from "../dataBase/RecipeData";
import { MissingFields } from "../error/MissingFields";
import { TokenNotPass } from "../error/TokenNotPass";
import Recipe from "../model/Recipe";
import { USER_ROLES } from "../model/User";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

class RecipeEndpoint {

    async create(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            const { titulo, descricao } = req.body

            if (!titulo || !descricao) {
                throw new MissingFields()
            }

            if (!token) {
                throw new TokenNotPass()
            }

            const id = new Authenticator().getTokenData(token)
            const idRecipe = new IdGenerator().idGenerator()
            const date = new Date();

            const recipe = new Recipe(idRecipe, titulo, descricao, date, id.id)

            const recipeData = new RecipeData()

            const response = await recipeData.createRecipe(recipe)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }

    }

    async searchRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            const id = req.params.id

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            new Authenticator().getTokenData(token)

            const recipeData = new RecipeData()

            const recipeById = await recipeData.getRecipeById(id)

            if (!recipeById) {
                throw new Error("Receita não encontrada")
            }

            // alterar data para brasileiro
            recipeById.setData(moment(recipeById.getDataCriacao(), "YYYY-MM-DD").format("DD/MM/YYYY"))

            res.status(200).send(recipeById)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async editRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization // pessoa logada
            const id = req.params.id // id da receita
            const { titulo, descricao } = req.body

            if (!token) {
                throw new TokenNotPass()
            }

            if (!titulo && !descricao) {
                throw new MissingFields()
            }

            // verificar se o token é valido
            const idPerson = new Authenticator().getTokenData(token)

            const recipeData = new RecipeData()

            const recipeById = await recipeData.getRecipeById(id)

            if (!recipeById) {
                throw new Error("Receita não encontrada")
            }

            // somente pessoas do tipo normal podem editar a propria receita
            if (idPerson.role === USER_ROLES.NORMAL && recipeById.getUsuarioId() !== idPerson.id) {
                throw new Error("Somente administradores podem editar receitas de outros usuarios")
            }

            const response = await recipeData.updateRecipe(id, titulo, descricao)

            res.status(200).send({ message: response })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
    async deleteRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization // pessoa logada
            const id = req.params.id // id da receita

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            const idPerson = new Authenticator().getTokenData(token)

            const recipeData = new RecipeData()

            const recipeById = await recipeData.getRecipeById(id)

            if (!recipeById) {
                throw new Error("Receita não encontrada")
            }

            // somente pessoas do tipo normal podem editar a propria receita
            if (idPerson.role === USER_ROLES.NORMAL && recipeById.getUsuarioId() !== idPerson.id) {
                throw new Error("Somente administradores podem editar receitas de outros usuarios")
            }

            const response = await recipeData.deleteRecipe(id)

            res.status(200).send({ message: response })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default RecipeEndpoint