// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function Delete() {
//     const[post,setPost] = React.useState(null);

//     React.useEffect(()=>{
//         axios.get(`${baseURL}/2`).then((response)=>{
//             setPost(response.data);
//         });
//     },[]);

//     function deletePost(){
//         axios
//             .delete(`${baseURL}/1`)
//             .then(()=>{
//                 alert("post deleted!");
//                 setPost(null)
//             });
//     }

//     if (!post) return "No post!"

//     return(
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <button onClick = {deletePost}>Delete Post</button>
//         </div>
//     );
// }

import React from 'react';
import axios from 'axios';

export default class PersonRemove extends React.Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}