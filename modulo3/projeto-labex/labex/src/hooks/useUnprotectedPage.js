import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/Coordinator"

// estou usando layout effect pois a tela pisca quando o estado é atualizado
// bsucando dados, só renderiza após carregar os dados.
const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(navigate)
        }
    }, [navigate])

}

export default useUnprotectedPage;