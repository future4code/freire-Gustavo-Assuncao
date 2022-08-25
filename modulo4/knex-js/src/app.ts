import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';


console.log("[Freire] Conectando ao banco");

const app = express()
app.use(express.json())
app.use(cors())

    app.get('/Actor', async (req, res)=>{
        // try {
        //     const result = await connection.raw(`
        //         SELECT * FROM Actor;
        //     `)
        //     res.status(200).send(result[0][1])
        // }catch (error: any) {
        //     res.status(500).send(error.sqlMessage || error.message)
        // }

        const getActorByName = async (name: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT * FROM Actor WHERE name = '${name}'
            `)
              return result[0]
          }
          getActorByName("Glória")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	})
    })
    

app.put('/alunos/:id',async (req,res) => {
    try {
        const result = await connection("alunos_labenu")
        .update({
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            especialidade: req.body.especialidade           

        }).where({id: req.params.id})
        res.status(200).send("Editado com sucesso")
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
    
})


app.post('/Actor', async (req, res) => {
    try {
        const result = await connection.raw (`  
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "${req.body.id}",
        "${req.body.name}",
        ${req.body.salary},
        "${req.body.birth_date}",
        "${req.body.gender}"
        )`)
        res.status(201).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const server = app.listen (3003,()=>{
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})