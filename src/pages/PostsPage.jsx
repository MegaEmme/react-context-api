import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {

    const [postsData, setPostsData] = useState([])
    const endpoint = "https://jsonplaceholder.typicode.com/posts";

    function getPosts() {
        axios.get(endpoint)
            .then(res => {
                setPostsData(res.data)
            })
            .catch(err => {
                console.error(err)
                alert('Errore')
            })
    }
    useEffect(getPosts, []);

    return <div>
        <h1>Lista Posts</h1>
        <div className="container">
            {postsData.map((element) => (
                <div className="post-card" key={element.id}>
                    <h2>Titolo:{element.title}</h2>
                    <Link to={`${element.id}`}>{element.body}</Link>
                    <h4>[ userId:{element.userId} ]</h4>
                </div>
            ))}
        </div>
    </div>
}

export default Posts;