import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { CardContainer, PostContainer, RoundedBox, RoundedBoxContainer } from "./PostStyled"
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
   
    const postComment = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]
    console.log(postComment)
    return (
        <CardContainer>
        <PostContainer>
            {postComment &&
            <>
            <p>Enviado por: {postComment.username}</p>
            <h3>{postComment.body}</h3>
            <RoundedBoxContainer>   
            <RoundedBox>
            <ThumbUpOutlinedIcon /> <p>{postComment.voteSum}</p> <ThumbDownOutlinedIcon />
            </RoundedBox>  
            <RoundedBox>
            <ChatBubbleOutlineRoundedIcon /> <p> {postComment.commentCount}</p> 
            </RoundedBox>  
            </RoundedBoxContainer>
            </>
            }
        </PostContainer>
        </CardContainer>
    )
}

export default PostPage; 