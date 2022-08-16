import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());


// 1)
// app.get('/', (req, res) => {
//     res.send('Hello, world!')
//    })

// 2) 
// app.get('/users', (req, res) => {
//     if (req.headers.chave === "Freire"){
//         res.send(`{
//             "id": 1,
//             "name": "Leanne Graham",
//             "phone": "82 8747-89842",
//             "email": "Sincere@april.biz",
//             "website": "writing-landing.com"
//         }`)
//     } else {
//         res.send("Valor não encontrado")
//     }
    
//    })

// 3) 

// interface AlunosAprovados {
//     name: string;
//     nota: number;
//   }
  
//   const students: AlunosAprovados[] = [
//     { name: 'Carla', nota: 6 },
//     { name: 'Fernando', nota: 5 },
//     { name: 'Ana',  nota: 7 },
//     { name: 'Denis', nota: 8 },
//     { name: 'Alice', nota: 9 },
//     { name: 'Antonio', nota: 9 }
//   ]

// 4) 

// app.get('/users', (req, res) => {
//     if (req.headers.chave === "Freire"){
//         res.send(`interface AlunosAprovados {
//             name: string;
//             nota: number;
//           }
          
//           const students: AlunosAprovados[] = [
//             { name: 'Carla', nota: 6 },
//             { name: 'Fernando', nota: 5 },
//             { name: 'Ana',  nota: 7 },
//             { name: 'Denis', nota: 8 },
//             { name: 'Alice', nota: 9 },
//             { name: 'Antonio', nota: 9 }
//           ]
//         `)
//     } else {
//         res.send("Valor não encontrado")
//     }
//    })

// 5)

// app.get('/users', (req, res) => {
//     if (req.headers.chave === "Freire"){
//         res.send(`[
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//           },
//           {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//           }
//         ]
//         `)
//     } else {
//         res.send("Valor não encontrado")
//     }
    
//    })

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta 3003: http://localhost:${address.port}`);
  } else {
    console.error(`Falhou ao iniciar o Servidor.`);
  }
});;

