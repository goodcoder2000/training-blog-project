import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () =>{
    const [ title, setTitle] = useState("");
    const [ body, setBody] = useState("");
    const [ author, setAuthor] = useState("mario");
    const navigate = useNavigate();

    const submitHandler = (event) =>{
        event.preventDefault();
        const result = { title, body, author};
        console.log(result);

        fetch("http://localhost:3000/blogs",{
            method: "POST",
            headers:    {"Content-Type": "Application/json"},
            body:   JSON.stringify(result)
        })
        .then(() =>{
            console.log("success");
            navigate('/');
        })
    }
    return(
        <div>
            <h2>Add Blogs</h2>
            <form onSubmit={ submitHandler}>
                <div className="mar">
                <label>blog title:</label>
                <input type="text" required onChange={(event) =>{
                    setTitle(event.target.value);
                }}  />
                </div>

                <div className="mar">
                <label>blog body:</label>
                <textarea required
                 onChange = { (event) => setBody(event.target.value)}
                ></textarea>
                </div>

                <div className="mar">
                <label>blog author:</label>
                <select required value={author}
                onChange = { (event) => setAuthor(event.target.value)}
                >
                    <option value ="mario">mario</option>
                    <option value="royzen">royzen</option>
                    <option value="luca">luca</option>
                </select>
                </div>

                
                    <button className="addBtn">add blog</button>
                
            </form>
        </div>

    )
}
export default NewBlog;