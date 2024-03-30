import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { useEnteringLoginDetailsMutation } from '../../services/LogApi'


function Login() {

  // let [logData] =  useEnteringLoginDetailsMutation

  var formik = useFormik({
    initialValues:{
      userName: '',
      Password: ''
    },
    validationSchema:Yup.object({
      userName:Yup.string().max(8, 'Too Large value').min(3, 'Too small value').required('Username cant be empty'),
      Password:Yup.string().max(10, 'Too long').min(5, 'Too small').required('Password cant be empty')
    }),
    onSubmit:(values)=>{
      console.log(values);
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='border rounded w-25 login' >
      <h1 className='text-warning p-3'>Login</h1>
      <div className='form-floating'>
      <input className='form-control' type='text' name="userName" placeholder='Enter name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      <lable>User Name</lable>
      <br/><br/>
      </div>
      <div className='form-floating'>
      <input className='form-control' type="password" name="Password" placeholder='Password' onChange={formik.handleChange}/>
      <lable>Password</lable><br/><br/>
      <button className='btn btn-primary'>Login</button>
      </div>
      <br/>
      <Link to="/Register"><a>Create an account here</a></Link>
      <Outlet/>
    </div>
    </form>
  )
}

export default Login
