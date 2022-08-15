import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/Coordinator"


// Função para reutilizar em todas as páginas com autenticação
const useProtectedPage = () => {
    const navigate = useNavigate()
    
    useEffect(()=> {
      const token = localStorage.getItem("token")
      if(token === null) {
        console.log("Não está logado!!!")
        goToLoginPage(navigate)
      }
    }, [navigate])
  
  }

  export default useProtectedPage;