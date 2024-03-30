import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <div><h1 style={{fontWeight: '1000'}}>Fun Zone</h1></div>
      <div>
        <ul className='nav-ul'>
          <Link to="" style={{ textDecoration: 'none' }} ><li >Home</li></Link>
          <Link to="Log" style={{ textDecoration: 'none' }} ><li>Login</li> </Link>
          <Link to="cu" style={{ textDecoration: 'none' }} ><li>Contact Us</li></Link>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
