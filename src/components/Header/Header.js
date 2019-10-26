import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return ( 
    <header>
      <h1>GET FIT</h1>
      <nav>
        {/* <Route> */}
      <Link to='/' >Home</Link>
      <Link to='/addex'>Add Exercise</Link>
      {/* </Route> */}
      </nav>
      </header>
   );
}
 
export default Header;