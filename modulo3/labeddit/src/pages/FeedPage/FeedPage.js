import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { PostContainer, CardContainer, RoundedBox, RoundedBoxContainer } from "./FeedStyles"
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

const FeedPage = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`) 
    console.log(posts)
    useProtectedPage()

    //está chegando em objetos no console objetos e estou mapeando 
    // para array de components
    const postsCards = posts.map((item)=> {
        return (
        <PostContainer key={item.id}> 
        <p>Enviado por:{item.username}</p>
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
        )
    })  
       
    // title={item.title} 
    // 
    // createdAt={item.createdAt}
    // userId={item.userId}
    return (
        <CardContainer>
            {postsCards}
        </CardContainer>
    )
}; 

export default FeedPage; 