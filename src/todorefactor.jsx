import React from "react";

function TodoRe(props){

    console.log("TodoRe: " +props.item)

    return(

   
        <li >
               {props.item}
       
         <button onClick={() => props.del(props.index)}> Del</button>
   
      </li>
    )
}

export default TodoRe;