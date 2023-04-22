import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
          <NavLink
            to="/"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Home Page
          </NavLink>
          <NavLink
            to="/signout"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Log Out
          </NavLink>
        </div>
      );
}

export default NavBar