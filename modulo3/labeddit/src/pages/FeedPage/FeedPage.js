import React, {useState} from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { PostContainer, CardContainer, RoundedBox, RoundedBoxContainer, ButtonsContainer } from "./FeedStyles"
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import FeedForm from "./FeedForm";
import Button from "@material-ui/core/Button"; 

const FeedPage = () => {
    useProtectedPage() 
    const [pagination, setPagination] = useState(0);
    const limitPage = 10;
    const posts = useRequestData([], `${BASE_URL}/posts/?page=${pagination}&size=${limitPage}`);

    const beforeClick = () => {
        if (pagination > 0) {
            setPagination(pagination-1)
        }
    };

    const afterClick = () => {
        if (pagination + 1 < 20) {
            setPagination(pagination + 1);
        }
      };
   
      console.log(posts)
    const postsCards = posts.map((item)=> {
        return (
            <>
        <PostContainer key={item.id}> 
        <p>Enviado por: {item.username}</p>
        <h3>{item.body}</h3>
        <RoundedBoxContainer>   
            <RoundedBox>
            <ThumbUpOutlinedIcon /> <p>{item.voteSum}</p> <ThumbDownOutlinedIcon />
            </RoundedBox>  
            <RoundedBox>
            <ChatBubbleOutlineRoundedIcon /> <p> {item.commentCount}</p> 
            </RoundedBox>  
            </RoundedBoxContainer>
        </PostContainer>
        </>
        )
    })  
   
    return (
        <>
        <FeedForm />
        <CardContainer>
            {postsCards}
        </CardContainer>
        <ButtonsContainer>
        <Button 
        onClick={() => beforeClick()}
        type={"submit"}
        variant={"contained"}
        color={"secondary"}
        > Anterior </Button>
        <Button 
        onClick={() => afterClick()}
        type={"submit"}
        variant={"contained"}
        color={"secondary"}
        > Proxima </Button>
        </ButtonsContainer>
        </>
    )
}; 

export default FeedPage; 