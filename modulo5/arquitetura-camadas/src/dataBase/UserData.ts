import moment from "moment";
import User, { feedDB, UserBD } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

class UserData extends BaseDataBase {

    private static tableName = "usuario_cookenu"

    async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await this.getConnetion()
            .select("*")
            .from(UserData.tableName)
            .where({ email })
            


        if (!result.length) {
            return undefined
        }

        return new User(result[0].id, result[0].nome, result[0].email, result[0].senha, result[0].role)
    }

    async getUserById(id: string): Promise<any> {

        const result = await this.getConnetion()
            .select("*")
            .from(UserData.tableName)
            .where({ id })

        return result
    }


    async createUser(user: User): Promise<string> {

        await this.getConnetion().insert({
            id: user.getId(),
            email: user.getEmail(),
            nome: user.getNome(),
            senha: user.getSenha(),
            role: user.getRole().toUpperCase()
        }).into(UserData.tableName)

        return `Usuario cadastrado com sucesso`
    }

    async insertFollow(idSeguir: string, idSeguido: string): Promise<string> {

        await this.getConnetion()
            .insert({
                id_seguir: idSeguir,
                id_seguido: idSeguido
            }).into("seguidores")

        return `Pessoa com id ${idSeguir} esta seguindo a pessoa com id ${idSeguido}`
    }

    async deleteFollow(idSeguir: string, idSeguido: string): Promise<string> {

        await this.getConnetion()
            .delete()
            .from("seguidores")
            .where({ id_seguir: idSeguir })
            .andWhere({ id_seguido: idSeguido })

        return `Pessoa com id ${idSeguir} deixou de seguir a pessoa com id ${idSeguido}`
    }

    async selectFeed(id: string): Promise<feedDB[]> {
        // select receita_cookenu.* , usuario_cookenu.nome from seguidores
        // inner join usuario_cookenu
        // on seguidores.id_seguido = usuario_cookenu.id
        // inner join receita_cookenu
        // on seguidores.id_seguido = receita_cookenu.usuario_id
        // where seguidores.id_seguir = "c4a14d4a-8b43-4981-8f09-6981a23fcb6b";

        const result = await this.getConnetion()
            .select("receita_cookenu.*", "usuario_cookenu.nome")
            .from("seguidores")
            .innerJoin("usuario_cookenu", "seguidores.id_seguido", "usuario_cookenu.id")
            .innerJoin("receita_cookenu", "seguidores.id_seguido", "receita_cookenu.usuario_id")
            .where({ "seguidores.id_seguir": `${id}` })



        const typeFeed = result.map((feed: any) => {
            const type: feedDB = {
                id: feed.id,
                title: feed.titulo,
                description: feed.descricao,
                createdAt: moment(feed.data_criacao, "YYYY-MM-DD").format("DD/MM/YYYY"),
                userId: feed.usuario_id,
                userName: feed.nome
            }

            return type
        })

        return typeFeed
    }


    async deleteFollowSeguir(idSeguir: string) {

        await this.getConnetion()
            .delete()
            .from("seguidores")
            .where({ id_seguir: idSeguir })
    }

    async deleteFollowSeguido(idSeguido: string) {
        await this.getConnetion()
            .delete()
            .from("seguidores")
            .where({ id_seguido: idSeguido })
    }

    async deleteUser(id: string) {
        await this.getConnetion()
            .delete()
            .from(UserData.tableName)
            .where({ id })
    }
}

export default UserData