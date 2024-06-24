import React from "react";

function Counter(){
    var [count, setCount] = React.useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }

    return <div className="abc">
        <h1 className="App">counter : {count}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>

    </div>
}
export default Counter;