import React from "react";
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer,} from "./LoginStyles"
import labelogo from "../../assets/labelogo.png"
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"; 
import LoginForm from "./LoginForm";


const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
        
    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <ScreenContainer>
            <LogoImage src={labelogo}/>
            <LoginForm />
            <SignUpButtonContainer>
            <Button 
                    type={"submit"}
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                    fullWidth
                    >
                    Não possui conta? Cadastre-se 
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}; 

export default LoginPage; 