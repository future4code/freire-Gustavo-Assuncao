import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());


// app.get("/searchPlaylist", (req, res)=> {
  
//   const authorization = req.headers.authorization 
//   const namePlaylist = req.query.name
//   if (!namePlaylist) {
//     res.send("Digite o nome da playlist")
//   }

  // const searchUser = users.filter (user =>{
  //   return user.id === authorization
  // })
  // res.send({searchUser})
//   res.send({namePlaylist, authorization})
  
// })


// app.get("/playlists", (req, res)=> {
  
//   const authorization = req.headers.authorization 
//   const newName = req.body.name

//   const newPlaylist = {
//     id:Date.now().toString(),
//     name:newName,
//     tracks:[]
//   }

//   const newList = users 

//   for (let user of newList) {
//     if (user.id ===authorization) {
//       user.playlists.push(newPlaylist)
//     }
//   }
//   res.send({authorization, newList})
//   })


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta 3003: http://localhost:${address.port}`);
  } else {
    console.error(`Falhou ao iniciar o Servidor.`);
  }
});;

