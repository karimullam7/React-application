import { useFormik } from "formik";
import React from "react";
function NewForm(){

    var [array, setArray]=React.useState([])

    var uf= useFormik({
        initialValues:{"fn":"","ln":"", "age":""},
        onSubmit:(fv)=>{
            setArray([...array, fv])
        }
    })
    console.log(array);

    return <div>
            <h1>FormIK handling example</h1>
            <form onSubmit={uf.handleSubmit}>
            <input type="text" name="fn" placeholder="firstname" onChange={uf.handleChange} /> <br/>
            <input type="text" name="ln" placeholder="lastname" onChange={uf.handleChange} /> <br/>
            <input type="text" name="age" placeholder="age" onChange={uf.handleChange} /> <br/>
            <button type="submit">save</button>
            </form>
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
}
export default NewForm;