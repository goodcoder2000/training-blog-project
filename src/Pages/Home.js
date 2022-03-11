import React,{useState, useEffect} from "react";
import BlogLists from "../BlogLists";
import useFetch from "../useFetch";

const Home = () =>{
    const { blogs, loading } = useFetch("http://localhost:3000/blogs");    
    
    return(
        <div>
            { loading && <div>Loading...</div>}
            
            { <BlogLists blogs = { blogs } title = "All blogs"/>}
        </div>

    );
}
export default Home;