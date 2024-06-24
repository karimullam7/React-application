import React from 'react'

function Child2(props ) {
    const click2 = ()=>{
        props.setInitialValue(props.initialValue-1)
    }
  return (
    <div>
        <button onClick={()=>{click2()}}>DEC</button>
    </div>
  )
}

export default Child2
