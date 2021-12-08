import axios from "axios";
import React from "react";

const client = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
});

export default function Delete(){
    const [post,setPost] = React.useState(null);

    React.useEffect(()=>{
        async function getPost(){
            const response = await client.get("/1");
            setPost(response.data);
        }
        getPost();
    },[]);
    async function deletePost(){
        await client.delete("/1");
        alert("post deleted!");
        setPost(null);
    }

    if (!post) return "No post!"

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick = {deletePost}>delete post</button>
        </div>
    );
} 