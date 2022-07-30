import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer} from "./LoginStyles"
import labelogo from "../../assets/labelogo.png"
import Button from "@material-ui/core/Button"; 
import LoginForm from "./LoginForm";
import {goToSignUpPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useProtectedPage"

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={labelogo}/>
            <LoginForm />
            <SignUpButtonContainer>
                <Button 
                    onClick={()=> goToSignUpPage(navigate)}
                    type={"submit"}
                    variant={"text"}
                    color={"secondary"}
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