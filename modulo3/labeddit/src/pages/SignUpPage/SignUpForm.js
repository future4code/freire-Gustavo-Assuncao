import React from "react";
import { InputsContainer, SignUpFormContainer } from "./SignUpStyles"
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
            <form onSubmit={onSubmitForm}>
                <SignUpFormContainer>
                <InputsContainer>
                <TextField 
                        name={"name"}
                        value= {form.name}
                        onChange={onChange}
                        label={"Name"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                        type={"name"}
                    />
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
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade*</p>
                    <FormControlLabel
                    control={<Checkbox name="checkedC" />} 
                    label="Eu concordo em receber emails sobre coisas legais no Labeddit"
                    fullWidth
                    />
                    <Button 
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    > Fazer Cadastro </Button>
                    </InputsContainer>
                    </SignUpFormContainer>
                </form>

           
    )
}; 

export default SignUpForm; 