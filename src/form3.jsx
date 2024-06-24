import { Formik } from 'formik'
import React, { useState } from 'react'

function Form3() {
var [array, setArray] = useState([])

  return(
    
    <>
    <h1>hi</h1>

    <Formik
            initialValues={{"name":"", "age":""}}
            onSubmit={(sv)=>{
                setArray([...array, sv])
             }}
>
  
   
    {
        (uf)=>{
            return(<div>
                    <form onSubmit={uf.handleSubmit}>
                        <input  type='text' placeholder='username' name="name" onChange={uf.handleChange} />
                        <input  type='text' placeholder='age' name="age" onChange={uf.handleChange} />
                        <button type='submit'>sub</button>
                    </form>

                    <div>
                        {
                            array.map((a)=>{
                                return<>
                                <h1>{a.name}</h1>
                                <h1>{a.age}</h1>
                                </>
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

export default Form3;
