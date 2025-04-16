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
        <NavLink 
          to="/preserving-and-resetting-state" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          PreservingState
        </NavLink> 
        <NavLink 
          to="/extracting-state-logic-into-a-reducer" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          ExtractingState
        </NavLink> 
        <NavLink 
          to="/passing-data-deeply-with-context" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          DataWithContext
        </NavLink> 
        <NavLink 
          to="/scaling-up-with-reducer-and-context" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Reducer&Context
        </NavLink> 
    </div>
  )
}

export default Navbar
