import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { products } from './data'

const app: Express = express();
app.use(express.json());
app.use(cors());



// 1) 

// app.get("/test", (req, res)=> {
//     res.send("API está funcionando")
//   })

// 2) 

// app.get('/list', (req, res) => {

//   const list: object[] = products.map(product => {
//       return product
//   })
//   res.status(200).send(list)
// })


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta 3003: http://localhost:${address.port}`);
  } else {
    console.error(`Falhou ao iniciar o Servidor.`);
  }
});;

