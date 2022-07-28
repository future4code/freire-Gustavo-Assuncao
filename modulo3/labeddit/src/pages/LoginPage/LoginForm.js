import React from "react";
import { InputsContainer, LoginFormContainer } from "./LoginStyles"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm"
import {login}  from "../../services/users" 


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })


    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear)
    }

    return (
        <LoginFormContainer>
                <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField 
                        name={"email"}
                        value= {form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"email"}
                        fullWidth
                        required
                        autoFocus
                    />
                    <TextField 
                        name={"password"}
                        value= {form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"password"}

                    />
                    <Button 
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    > Fazer Login </Button>
                    </InputsContainer>
                </form>
            </LoginFormContainer>
           
    )
}; 

export default LoginForm; 