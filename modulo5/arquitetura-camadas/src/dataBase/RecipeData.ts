import Recipe from "../model/Recipe";
import { BaseDataBase } from "./BaseDataBase";

class RecipeData extends BaseDataBase {

    private static TABLE_NAME = "receita_cookenu"

    async createRecipe(recipe: Recipe): Promise<string> {
        console.log(recipe);
        
        await this.getConnetion().insert({
            id: recipe.getId(),
            titulo: recipe.getTitulo(),
            descricao: recipe.getDescricao(),
            data_criacao: recipe.getDataCriacao(),
            usuario_id: recipe.getUsuarioId()
        }).into(RecipeData.TABLE_NAME)

        return `Receita ${recipe.getTitulo()} criada com sucesso`
    }

    async getRecipeById(id: string): Promise<Recipe | undefined> {

        const result = await this.getConnetion()
            .select("*")
            .from(RecipeData.TABLE_NAME)
            .where({ id })

        if (!result.length) {
            return undefined
        }

        return new Recipe(
            result[0].id,
            result[0].titulo,
            result[0].descricao,
            result[0].data_criacao,
            result[0].usuario_id
        )
    }

    async getRecipeByUserId(id: string): Promise<Recipe[] | undefined> {

        const result = await this.getConnetion()
            .select("*")
            .from(RecipeData.TABLE_NAME)
            .where({ usuario_id:id })
        
        if (!result.length) {
            return undefined
        }

        const typeRecipe = result.map((recipe:any)=>{
            return new Recipe(
                recipe.id,
                recipe.titulo,
                recipe.descricao,
                recipe.data_criacao,
                recipe.usuario_id
            )
        })

        return typeRecipe
    }

    async updateRecipe(id: string, titulo: string, descricao: string): Promise<string> {

        await this.getConnetion().update({
            titulo,
            descricao
        })
            .from(RecipeData.TABLE_NAME)
            .where({ id })

        return `A receita foi atualizada com sucesso`
    }

    async deleteRecipe(id: string): Promise<string> {

        await this.getConnetion()
            .delete()
            .from(RecipeData.TABLE_NAME)
            .where({ id })

        return `Receita deletada com sucesso`
    }
}
export default RecipeData