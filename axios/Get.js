// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/8";

// export default function Get(){
//     const [post,setPost] = React.useState(null);

//     React.useEffect(() => {
//         axios.get(baseURL).then((response)=>{
//             setPost(response.data);
//         });
//     },[]);
//     if(!post) return null;

//     return(
//         <div>
//             <h1>
//                 {post.title}
//             </h1>
//             <p>
//                 {post.body}
//             </p>
//         </div>
//     );
// }

import react from "react";
import axios from "axios";

export default class Get extends react.Component {
    state = {
        persons:[]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            const persons=res.data;
            this.setState({persons});
            console.log(persons);
        })
    }

    render(){
        return(
            <ul>
                {
                    this.state.persons
                    .map(persons=>
                        <li key={persons.id}><h1>{persons.username}</h1> 
                        <strong>email is</strong> <h6>{persons.email}</h6> lives in <h1>{persons.address.city}</h1>
                        <h6>and position is lat</h6> <h1>{persons.address.geo.lat}</h1> <h6>long is</h6> <h1>{persons.address.geo.lng}</h1>
                        belongs to {persons.company.name} gives the catchphrase {persons.company.catchPhrase}
                        </li>
                        )
                }
            </ul>
        )
    }
}