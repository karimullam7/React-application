import React from 'react'
import { connect } from 'react-redux';

const Karimcounter = (props) => {
console.log(props);
  function INC(){

  }

  return (
    <div className='bt'>
      <h1>Counter second one:{props.counter.count}</h1>
      <button onClick={INC}>Inc</button>
      <button>Dec</button>
      <button>reset</button>
    </div>
  )
}

export default connect(function (store) {return(store)}) (Karimcounter) 
