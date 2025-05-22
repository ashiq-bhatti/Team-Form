import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <nav>
        <ul>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Sign In</NavLink></li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Navbar
