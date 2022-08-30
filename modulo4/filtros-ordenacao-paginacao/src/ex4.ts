import axios from "axios"
import { baseURL } from "./baseURL"

type NewsType ={
  title: string,
  content: string,
  date: number | string
}

const news: NewsType = {
  title: "Freire curte loucamente o backend",
  content: "Alucinados, turma Freire se torma primeira turma com todos backenders",
  date: Date.now()
}

type TypeSubscribers = {
  id:string,
  name: string,
  email: string
}


const createNews = async (news: NewsType): Promise<void> => {
  return await axios.put(`${baseURL}/news`, news)
}

const getAllSubscribers = async (): Promise<TypeSubscribers[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data
}

const getSubscribersIds = (subscribers: TypeSubscribers[]): string[] => {
  return subscribers.map((subscriber:TypeSubscribers) => {
    return subscriber.id
  })
}

const notifyAllSubscribers = async (ids: string[]):Promise<void> => {
      try {
          const requests = ids.map( id =>
            axios.post(`${baseURL}/notifications`, {
              subscriberId: id,
              message: "Mensagem do react group"
            }))

            await Promise.all(requests)
            console.log(requests)

      console.log(`[Promise.all] Enviado com sucesso`)
    } catch (error: any) {
      console.log(`[Promise.all] Error ao enviar para`)
    }
  
}

const main = async():Promise<void> => {
  try {
    createNews(news)
    const subscribers = await getAllSubscribers()
    const subscriberIds =  getSubscribersIds(subscribers)
    await notifyAllSubscribers(subscriberIds)
  } catch (error:any) {
    const resp = error.response.data || error.message
    console.log(resp)
    
  }

 }

 main()