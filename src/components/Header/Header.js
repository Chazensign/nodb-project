import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/"><h1 style={{opacity: 1}} className="title">GET FIT</h1></Link>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/addex">
          Add Exercise
        </Link>
      </nav>
    </header>
  )
}
 
export default Header;