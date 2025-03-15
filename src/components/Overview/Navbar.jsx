import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            ManageState
        </NavLink>
        <NavLink 
            to="/reacting-to-input-with-state" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            InputState
        </NavLink> 
    </div>
  )
}

export default Navbar
