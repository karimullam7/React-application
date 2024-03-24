import React from 'react'
import { Formik } from 'formik'
import * as Yup  from 'yup';

function Register() {
  return (
    <div>
      <Formik>
        initialValues={
            {
                fullName: '',
                number: '',
                emailId:'',
                age: ''
                
            } }
            {()=>{
                <form >

                </form>
            }}
      </Formik>
    </div>
  )
}

export default Register
