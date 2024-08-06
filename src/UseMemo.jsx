import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber]= useState(0)
    const [count, setCount]= useState(0)
     function cub(num) {
            console.log("calculation done!!!!");
        return Math.pow(num, 3)
    }
    const result = useMemo(()=>cub(number),[number]) 
    function add(){
        return setCount(count+1)
    }
  return (
    <div>
      <input type="text" onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>cube of number:{result} </h1>
      <h1>{count}</h1>
      <button onClick={add}>counter++</button>
    </div>
  )
}

export default UseMemo
