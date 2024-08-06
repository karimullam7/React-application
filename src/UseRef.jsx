import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    // const [value, setValue] = useState(0)
    // const count = useRef(0)
    
    // useEffect(()=>{
    //     count.current=count.current+1
    // })

    const inputEle = useRef()
    

    function btnclk(){
        return (
            inputEle.current.style.background="red"
        )
    }


    
  return (
    <div>
      
      {/* <button onClick={()=>{setValue(value=>value+1)}}>+1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(value=>value-1)}}>-1</button>
      <h1>Number of times rendering:{count.current}  </h1> */}

      <input type='text' ref={inputEle}/>
      <button onClick={btnclk}>Click</button>
    </div>
  )
}

export default UseRef
