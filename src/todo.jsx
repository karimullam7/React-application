import React from "react";
import TodoRe from "./todorefactor";

function Todo() {
  const [array, setArray] = React.useState([]);
  const [newA, setnewA] = React.useState("");

  function add() {
    setArray([...array, newA]);
    
    setnewA(""); // Clear the input after adding
  }
 
 var del= React.useCallback((index) =>  {
  const newArray = [...array];
  newArray.splice(index, 1);

  setArray(newArray);
},[])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" value={newA} onChange={(e) => setnewA(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {array.map((a, index) => {
          return(

          <TodoRe item={a}  del={del} index={index}/>)
        })}
      </ul>
    </div>
  );
}

export default React.memo(Todo);
