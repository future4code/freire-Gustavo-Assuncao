import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

// 1) 
// app.get("/ping", (req, res) => {          
//   res.send("Pong! 🏓")
// })

// 2)

type toDo = {
  userId: number,
  id: number, 
  title: string,
  completed: boolean
}

// 3)
const toDos: toDo[] = [
  {
    userId: 1,
    id: 1,
    title: "acordar cedo",
    completed: true
  }, 
  {
    userId: 2,
    id: 2,
    title: "fazer exercício físico",
    completed: false
  }, 
  {
    userId: 3,
    id: 3,
    title: "pagar boletos",
    completed: false
  }
]

// 4)
app.get('/todo', (req, res) => {

  const toDoAPI: object[] = toDos.map(toDos1 => {
      return toDos1
  })
  res.status(200).send(toDoAPI)
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta 3003: http://localhost:${address.port}`);
  } else {
    console.error(`Falhou ao iniciar o Servidor.`);
  }
});;

