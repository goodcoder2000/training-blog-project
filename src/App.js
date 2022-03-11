import React from 'react';
import './Gstyle.css';
import Home from './Pages/Home';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import NewBlog from './Pages/NewBlog';
import NoPage from './Pages/NoPage';
import Details from './Pages/Details';

const App = () =>{
    return(
        <Router>
            <div className = "container">
                <Nav/>
                    <Routes>
                        <Route path='/' element = {<Home/>}/>
                        <Route path='/NewBlog' element={<NewBlog/>}/>
                        <Route path='/blogs/:id'element={ <Details/> }/>
                        <Route path='*' element={<NoPage/>} />
                    </Routes>
            </div>
        </Router>

    );
}
export default App;