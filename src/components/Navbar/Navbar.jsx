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

      <ul className="navLinks">
        <li className="navLink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/authors">Authors</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/addauthor">Add Author</NavLink>
        </li>
      
      </ul>
      <label className="nav-label" htmlFor="navCheck"><FaBars /></label>

    </nav>
  
  );
}



export default Navbar;
