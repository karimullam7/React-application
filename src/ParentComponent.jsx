import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function ParentComponent() {
    const [initialValue,setInitialValue] = React.useState(0)
  return (
    <div>
        <h1>{initialValue}</h1>
        <Child1 initialValue={initialValue} setInitialValue={setInitialValue}></Child1>
        <Child2 initialValue={initialValue} setInitialValue={setInitialValue}></Child2>
    </div>
  )
}

export default ParentComponent
