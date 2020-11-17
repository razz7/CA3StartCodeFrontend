import React from "react"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/links">links</NavLink></li>
        <li><NavLink activeClassName="active" to="/user">user</NavLink></li>
        <li><NavLink activeClassName="active" to="/admin">admin</NavLink></li>
        <li><NavLink activeClassName="active" to="/howto">How to use</NavLink></li>
       
      </ul>
      
    )
}

export default Header