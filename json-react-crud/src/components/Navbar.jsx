import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div id='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/all'>AllUsers</NavLink>
        <NavLink to='/add'>AddUser</NavLink>
    </div>
  )
}
