import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const Posts = ({ children }) => {
    const [postsData, setPostsData] = useState([])
    const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    function getPosts() {
        axios.get(endpoint)
            .then(res => {
                setPostsData(res.data)
            })
    }
    useEffect(getPosts, []);

    return (
        <GlobalContext.Provider value={{ postsData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Posts;