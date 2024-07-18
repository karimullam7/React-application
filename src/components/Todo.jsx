import React, {  useRef, useState } from 'react'
import { connect } from 'react-redux'
import { store } from '../app/store/store';

function Todo(props) {
    
const [userinfo, setUserinfo] = useState("")
const ref= useRef();


function Add(){
    ref.current.value=""

props.dispatch({type:"adding" , payload: userinfo})
}


  return (
    <div>
      <h1>Todo list</h1>
      <input  type='text'  ref={ref}  onKeyUp={(event)=>{setUserinfo(event.target.value)}} placeholder='Enter Todos'/>
      <button onClick={Add}>ADD</button>
    </div>
  )
}

export default connect(store=>store) (Todo)
