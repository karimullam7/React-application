import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount] =useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)
        },2000)
    },[])
  return (
    <div>
      <h1>Number of time renderings = {count}</h1>

    </div>
  )
}

export default UseEffect
