import axios from "axios"
import { baseURL } from "./baseURL"
import { AddressInfo } from "net";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type TypeSubscribers = {
    id:string,
    name: string,
    email: string
  }
const getAllSubscribers = async (): Promise<TypeSubscribers[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
  }
  

console.log("Freire - fazendo outras coisas")

const main = async():Promise<void> => {
    try {
      const subscribers = await getAllSubscribers()
    //   const subscriberIds =  getSubscribersIds(subscribers)
    } catch (error:any) {
      const resp = error.response?.data || error.message
      console.log(resp, "não funcionou")
    }
   }
   main();

   
const server = app.listen( 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  
  export default app;


