import React,{ useState} from "react";
import { Link } from "react-router-dom";
import './Gstyle.css';

const BlogLists = ({blogs, title}) =>{
    const [ result, setResult] = useState("");

    const searchHandler = (event) =>{
        const forSearch  = event.target.value.toLocaleLowerCase();
            setResult(
                blogs.filter((blog) =>{
                    return blog.title.toLocaleLowerCase().includes(forSearch);
                })
            )
            console.log(result);
    }

    return(
        <div>
            <h1>{title}</h1>
            { blogs && <input className="searchBar" type= "text" placeholder="Search Blogs"
            onChange={ searchHandler } />}
            { result === "" ?blogs && blogs.map((blog) =>{
                    return(
                        <div className="eachBlog" key={blog.id}>
                            <Link className="forLink" to={`/blogs/${blog.id}`}>
                                <div>No.{blog.id}</div>
                                <h2 className="headerColor">{blog.title}</h2>
                                <p>writen by {blog.author}</p>
                            </Link>
                        </div>
                    )
                }) : result.map((blog) =>{
                    return(
                        <div className="eachBlog" key={blog.id}>
                            <Link className="forLink" to={`/blogs/${blog.id}`}>
                                <div>No.{blog.id}</div>
                                <h2 className="headerColor">{blog.title}</h2>
                                <p>writen by {blog.author}</p>
                            </Link>
                        </div>
                    )
                })            
            }
        </div>
    )
}
export default BlogLists;