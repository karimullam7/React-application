import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {INC, DEC} from '../counterActions';

const Counter = () => {

    const count = useSelector((state)=>state.count);
    const dispatch= useDispatch();


  return (
    <div>
      <h1>Counter{count}</h1>
      <button onClick={()=>dispatch(INC())}>Increment</button>
      <button onClick={()=>dispatch(DEC())}>Decrement</button>
    </div>
  )
}

export default Counter
