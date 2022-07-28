import React from "react";
import { InputsContainer } from "./LoginStyles"
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"; 


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    // const [isLoading, setIsLoading] = useState(false)



    const onSubmitForm = (event) => {
        event.preventDefault()
        // login(form, clear, history, setRightButtonText, setIsLoading)

    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"email"}
                        value= {form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"email"}
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
                </form>
            </InputsContainer>
           
    )
}; 

export default LoginForm; 