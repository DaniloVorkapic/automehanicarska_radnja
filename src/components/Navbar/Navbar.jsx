import React from 'react'
import { FaHome  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './navbar.css';





function Navbar() {
  return (
    <div className='navBar'>
      <Link
      to = "/login"
      className = "site-title"
      >
  <i><FaHome  /></i> 
      </Link>
      <ul>
        <li>
          <Link
          to = "/reservation"
          >
            <span>Rezervacija</span>
          </Link>
          </li>
          <li>
          <Link
          to = "/"
          >
            <span>Login</span>
          </Link>
          </li>
          <li>
          <Link
          to = "/register"
          >
            <span>Register</span>
          </Link>
          </li>
      </ul>
    </div>
  )
}

export default Navbar

