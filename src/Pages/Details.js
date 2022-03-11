import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Gstyle.css';
import useFetch from "../useFetch";

const Details = () =>{
    const { id } = useParams();
    const { blogs, loading} = useFetch("http://localhost:3000/blogs/" + id);
    const navigate = useNavigate();

    const deleteHandler = () =>{
        fetch("http://localhost:3000/blogs/" + id,{
            method: "DELETE"
        })
        .then(() => {
            console.log("deleted!!!")
            navigate('/');
        })
    }
    return(
        <div>
            { loading && <h2>Loading...</h2>}
           { blogs &&  <div>
                    <h2>{blogs.title}</h2>
                    <div>{blogs.author}</div>
                    <p>{blogs.body}</p>
                    <button className="delBtn" onClick={ deleteHandler }>delete this blog</button>
               </div>}
        </div>
    );
}
export default Details;
