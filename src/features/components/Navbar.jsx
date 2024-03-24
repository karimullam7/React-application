import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <div><h1>Fun Zone</h1></div>
      <div>
        <ul className='nav-ul'>
          <Link to=""><li>Home</li></Link>
          <Link to="Log" ><li>Login</li> </Link>
          <Link to="cu"><li>Contact Us</li></Link>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
