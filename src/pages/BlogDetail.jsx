import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function getPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(getPost, [id]);

    const navigate = useNavigate();

    if (error) {
        return <div>Error...</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return <>
        <div className="container">
            <h1>{post.title}</h1>
            <h2>Post numero: {post.id}</h2>
            <p>{post.body}</p>
            <button onClick={() => {
                navigate("/posts");
            }}>Torna alla lista dei post</button>
            <br />
            <button onClick={() => {
                navigate(`/posts/${parseInt(id) - 1}`)
            }}>Post precedente</button>
            <button onClick={() => {
                navigate(`/posts/${parseInt(id) + 1}`)
            }}>Post successivo</button>
        </div>
    </>
}

export default BlogDetail;