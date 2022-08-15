import React from "react";
import { InputsContainer, ContainerText, ContainerTitle } from "./FeedStyles"
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"; 
import useProtectedPage from "../../hooks/useProtectedPage"
import { createPost } from "../../services/posts"
import {useNavigate} from "react-router-dom"

    const FeedForm = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({ title: "", body: ""})
    

    const onSubmitForm = () => {
        createPost(form, clear)
    }

    return (
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                <ContainerTitle>
                <TextField 
                        name={"title"}
                        value= {form.title}
                        onChange={onChange}
                        label={"Titulo"}
                        variant={"outlined"}
                        margin={"normal"}
                        required
                        autoFocus
                        type={"title"}
                    />
                    </ContainerTitle>
                    <ContainerText>
                    <TextField 
                        name={"body"}
                        value= {form.body}
                        onChange={onChange}
                        label={"Post"}
                        variant={"outlined"}
                        margin={"normal"}
                        required
                        type={"text"}
                    />
                    </ContainerText>
                    <Button 
                    type={"submit"}
                    variant={"contained"}
                    color={"secondary"}
                    > Postar </Button>
                    </InputsContainer>
                </form>
    )
}; 

export default FeedForm; 