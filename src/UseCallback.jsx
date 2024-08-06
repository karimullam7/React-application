import React, { useCallback, useState } from 'react'
import Header from './components/Header'

const UseCallback = () => {

    const [count,setCount] = useState(0)

    const fn = useCallback(()=>count,[count])

  return (


    <div>
        <Header  fn={fn} />
      <h1>counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default UseCallback
