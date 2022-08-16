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

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta 3003: http://localhost:${address.port}`);
  } else {
    console.error(`Falhou ao iniciar o Servidor.`);
  }
});;


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "phone": "82 8747-89842",
//     "email": "Sincere@april.biz",
//     "website": "writing-landing.com"
//       }