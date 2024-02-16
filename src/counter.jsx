import React from "react";


function Counter(x){
console.log(x);
    var [count, setCount] =React.useState(x.cstart)


    function inc(){
       
        setCount(count+x.ad)
      
    }
    function dec(){
       
        setCount(count-x.ad)
        
    }


     return <div>

        <h1>{x.cname}: {count}</h1>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>

     </div>
}

export default Counter;