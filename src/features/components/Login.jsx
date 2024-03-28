import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'


function Login() {

  return (
    <div className='border rounded w-25 login' >
      <h1 className='text-warning'>Login</h1>
      <input className='form-control' type='text' placeholder='Enter name'/><br/><br/>
      <input className='form-control' type="password" placeholder='Password'/><br/><br/>
      <button className='btn btn-primary'>Login</button>
      <br/>
      <Link to="/Register"><a>Create an account here</a></Link>
      <Outlet/>
    </div>
  )
}

export default Login
