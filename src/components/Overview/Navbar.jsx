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
        <NavLink 
          to="/choosing-the-state-structure" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          StateStructure
        </NavLink> 
        <NavLink 
          to="/sharing-state-between-components" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          SharingState
        </NavLink> 
    </div>
  )
}

export default Navbar
