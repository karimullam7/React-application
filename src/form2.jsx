import { Formik } from "formik";
import React from "react";
function Form2 (){

    var [array, setArray]= React.useState([])
    return(
        <>
        <h1>Hi formik method two</h1>
        <Formik
            initialValues={{"fn":"","ln":"","age":""}}
            onSubmit={(fv)=>{ 
                setArray([...array,fv])
             }}
>

            {
                (userForm)=>{
                    return (
                       <div>
                         <form onSubmit={userForm.handleSubmit}>
                            <input type="text" placeholder="firstname" name="fn" onChange={userForm.handleChange} /> <br/>
                            <input type="text" placeholder="lastname"  name="ln" onChange={userForm.handleChange} /> <br/>
                            <input type="text" placeholder="age" name="age" onChange={userForm.handleChange} /> <br/>
                            <button type="submit">Save</button>
                        </form>
                        <div>
{

    array.map((a)=>{
        return <div>
        <h1>{a.fn}</h1>
        <h1>{a.ln}</h1>
        <h1>{a.age}</h1>
    </div>
    })
}

                        </div>
                       </div>
                    )
                }
            }

            
        </Formik>
        </>
    )
}

export default Form2;