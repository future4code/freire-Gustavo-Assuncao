import React from "react";
import { InputsContainer } from "./FeedStyles"
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"; 
import { useNavigate } from "react-router-dom"
import { signUp } from "../../services/users";

const FeedForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body:""})
    const navigate = useNavigate ()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return (
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                <TextField 
                        name={"username"}
                        value= {form.username}
                        onChange={onChange}
                        label={"Username"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                        type={"name"}
                    />
                    <TextField 
                        name={"text"}
                        value= {form.body}
                        onChange={onChange}
                        label={"Etext"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"text"}
                    />
                    <Button 
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    > Postar </Button>
                    </InputsContainer>
                </form>
    )
}; 

export default FeedForm; 