import React from "react";
import "./App.css";

function Counter(){

    const [c, setCount]=  React.useState(0)

    function inc(){
        setCount(c+1)
    }

    
    function dec(){
        setCount(c-1)
    }
   

    return <div className="App">
        <h1>Counter: {c}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
    </div>
}

export default React.memo(Counter);