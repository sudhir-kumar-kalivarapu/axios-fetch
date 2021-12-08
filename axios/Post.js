// import axios from "axios";
// import React from "react";

// const baseURl="https://jsonplaceholder.typicode.com/posts";

// export default function Post(){
//     const[post,setPost] = React.useState(null);

//     React.useEffect(() => {
//         axios.put(`${baseURl}/1`).then((response) => {
//             setPost(response.data);
//         });
//     },[]);

//     function createPost(){
//         axios
//             .post(baseURl,{
//                 title: "hello",
//                 body:"this is a new post",
//                 id:"101"
//             })
//             .then((response)=>{
//                 setPost(response.data);
//             });
//     }
//     if (!post) return "No post1"

//     return(
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <button onClick = {createPost}>Create post</button>
//         </div>
//     );
// }


import react from "react";
import axios from "axios";

export default class Post extends react.Component{
    state={
        name:''
    }

    handleChange = event => {
        this.setState({ name:event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();

        const user={
            name:this.state.name
        };
    
    axios.post(`https://jsonplaceholder.typicode.com/users`,{ user })
    .then(res=>{
        // console.log(res);
         console.log(res.data)
    })
}

render(){
    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    person name:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">add</button>
            </form>
        </div>
    )
    }
}
