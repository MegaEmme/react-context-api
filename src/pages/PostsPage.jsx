import axios from "axios";
import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";

const Posts = () => {

    const [postsData, setPostsData] = useState([])
    const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";

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
        <PostsList postsData={postsData} />
    </div>
}

export default Posts;