import React from "react";

function Counter(){

    const [c, setCount]=  React.useState(0)

    function inc(){
        setCount(c+1)
    }

    
    function dec(){
        setCount(c-1)
    }

    return <div>
        <h1>counter:{c}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
    </div>
}

export default Counter;