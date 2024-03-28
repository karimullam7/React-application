import { useFormik } from 'formik';
import { useEnteringRegDetailsMutation } from '../../services/Api';


function checkForm(values){

var errors={};
if(!values.fullName){
  errors.fullName='FullName is required'
}
if(!values.number){
  errors.number='Number is required'
}
if(!values.email){
  errors.email='Email is required'
}
if(!values.age){
  errors.age='Age is required'
}
if(!values.password){
  errors.password='Password is required'
}if(!values.confirmpassword){
  errors.confirmpassword='ConfirmPassword is required'
}
return errors
}

function Register() {

 let [data]= useEnteringRegDetailsMutation()

 var formik = useFormik({
  initialValues:{
    fullName:'',
    number:'',
    email:'',
    age:'',
    password:'',
    confirmpassword:''
  },
  validate:checkForm,
  onSubmit:(values)=>{
 data(values).then((res)=>{
  console.log(res);
 })

  }
 })
 console.log(formik.touched);


  return (
    <div className='registartion'>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-floating kk'>
          <input  className='form-control '  placeholder='Enter FullName' type="text" name='fullName' onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
          <label  >FullName</label>
        <i className='md'>{formik.touched.fullName &&   formik.errors.fullName}</i>
        </div>

        <div className='form-floating'>
          <input className='form-control' placeholder='Enter Number' type="text" name='number' onChange={formik.handleChange} onBlur={formik.handleBlur}  /><br />
          <label >Number</label>
          <i className='md'>{formik.touched.number && formik.errors.number}</i>
        </div>

        <div className='form-floating'>
          <input className='form-control' placeholder='Enter Email' type="text" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  /><br />
          <label >Email</label>
          <i className='md'>{formik.touched.email && formik.errors.email}</i>
        </div>

        <div className='form-floating'>
          <input className='form-control' placeholder='Enter age' type="text" name='age' onChange={formik.handleChange} onBlur={formik.handleBlur}  /><br />
          <label >Age</label>
          <i className='md'>{formik.touched.age && formik.errors.age}</i>
        </div>

        <div className='form-floating'>
          <input className='form-control' placeholder='Enter Password' type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}  /><br />
          <label >Password</label>
          <i className='md'>{formik.touched.password && formik.errors.password}</i>
        </div>

        <div className='form-floating'>
          <input className='form-control' placeholder='Enter confirmpassword' type="password" name='confirmpassword' onChange={formik.handleChange} onBlur={formik.handleBlur}  /><br />
          <label >Confirm Password</label>
          <i className='md'>{formik.touched.confirmpassword && formik.errors.confirmpassword}</i>
        </div>

        <button type='submit' className='btn btn-primary'  >Create Account</button>
      </form>

    </div>
  )
}

export default Register
