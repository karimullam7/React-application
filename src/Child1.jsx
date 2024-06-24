import React from 'react'

function Child1(props) {
    // console.log(props);
    const inc = ()=>{
        props.setInitialValue(props.initialValue+1)
    }
  return (
    <div>
        <button onClick={()=>{inc()}}>INC</button>
    </div>
  )
}

export default Child1
