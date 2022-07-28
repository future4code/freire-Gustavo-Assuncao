import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { PostCard } from "./FeedStyles"

const FeedPage = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`) 
    console.log(posts)
    useProtectedPage()

    //está chegando objetos e estou mapeando para array de components
    const postsCards = posts.map((post)=> {
        return <PostCard>
        key={post.id}
        title={post.title} 
        createdAt={post.createdAt}
        userId={post.userId}
        </PostCard>
       
        // "id": "6503d483-68ee-4b96-b399-44cbb5e2041b",
        // "body": "post",
        // "title": "Primeiro",
        // "createdAt": "2021-05-28T12:55:10.785Z",
        // "userId": "a45f6d7f-be44-497e-94ee-759673ca5d16",
        // "voteSum": null,
        // "commentCount": null,
        // "userVote": null
        
 
    })

    return (
        <div>
            <h1>FeedPage</h1>
            {postsCards}
        </div>
    )
}; 

export default FeedPage; 