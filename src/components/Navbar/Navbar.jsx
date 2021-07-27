import React from "react";
import "./Navbar.scss";
import { NavLink} from "react-router-dom";
import { FaBars } from 'react-icons/fa'
function Navbar() {
  return (
    
    <nav>
      <div className="logo">
        <p> <NavLink to="/">Author</NavLink></p>
      </div>
    <input type="checkbox" id="navCheck" style={{display:"none"}} />

      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/authors">Authors</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/addauthor">Add Author</NavLink>
        </li>
      
      </ul>
    <label className="nav-label" htmlFor="navCheck"><FaBars /></label>

    </nav>
  
  );
}



export default Navbar;
