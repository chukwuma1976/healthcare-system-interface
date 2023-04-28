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
            to="/providers"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Providers
          </NavLink>
          <NavLink
            to="/appointments"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Appointments
          </NavLink>
          <NavLink
            to="/patient_records"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            PatientRecords
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