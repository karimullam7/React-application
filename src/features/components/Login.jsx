import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Login() {
  return (
    <div className='border border-success rounded w-25 ' >
      <input type='text' placeholder='Enter name'/><br/><br/>
      <input type="password" placeholder='Password'/><br/><br/>
      <button>Login</button>
      <br/>
      <Link to="/Log/Register"><a>Create an account here</a></Link>
      <Outlet/>
      
    </div>
  )
}

export default Login
