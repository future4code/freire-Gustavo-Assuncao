import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from './connection';

const app = express();

app.use(express.json());
app.use(cors());

console.log("[Freire] Conectando ao banco");

//2- pegar user pelo id
app.get('/user/:id', async (req, res) => {
  try {
    const result = await connection("TodoListUser").where({ id: req.params.id })
    res.status(200).send(result[0])
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// 5. Criar Tarefa 
app.get('/task/:id', async (req, res) => {
  try {
    const result = await connection("TodoListTask")
      .where({ taskId: req.params.id })
    res.status(200).send(result[0])
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// 1- Criar user
app.post('/user', async (req, res) => {
  try {
    const result = await connection.raw(`
            INSERT INTO TodoListUser (id,name,nickname,email)
            VALUES( 
                "${req.body.id}",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            );`)
    res.status(201).send("Cadastrado com sucesso")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// 4. Criar Tarefa 
app.post('/user', async (req, res) => {
  try {
    const result = await connection.raw(`
          INSERT INTO TodoListTask (title,description,limitDate,creatorUserId)
          VALUES( 
              "${req.body.title}",
              "${req.body.description}",
              "${req.body.limitDate}".,
              "${req.body.creatorUserId}"
          );`)
    res.status(201).send("Cadastrado com sucesso")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})


//3- Editar user pelo id
app.put('/user/edit/:id', async (req, res) => {
  try {
    const result = await connection("TodoListUser")
      .update({
        name: req.body.nome,
        nickname: req.body.email
      }).where({ id: req.params.id })
    res.status(200).send("Editado com sucesso")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;