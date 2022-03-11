import React from "react";
import { Link } from "react-router-dom";
import { IoCreateSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Nav = () =>{
    return(
        <div>
            <div className="nav">
                <h1 className="headerColor">Hello Blogs</h1>

                <div className="forpc">
                    <Link className="btn forLink" to="/">Home</Link>
                    <Link className="btn forLink" to="/NewBlog">NewBlog</Link>
                </div>

                <div className="formobile">
                    <Link className="iconBtn" to="/">
                         <HiMenu size="35px"/>
                    </Link>
                    
                    <Link className="iconBtn" to="/NewBlog">
                         <IoCreateSharp size="35px"/>
                    </Link>
                </div>
            </div>

            <div className="line"></div>
        </div>

    );
}
export default Nav;