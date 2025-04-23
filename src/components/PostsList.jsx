import { Link } from "react-router-dom";

const PostsList = ({ postsData }) => {
    return (
        <>
            <div className="container">
                {postsData.map((element) => (
                    <div className="post-card" key={element.id}>
                        <h2>Titolo:{element.title}</h2>
                        <Link to={`${element.id}`}>{element.body}</Link>
                        <h4>[ userId:{element.userId} ]</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PostsList;