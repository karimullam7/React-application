import React from "react";

function Todo() {
    const [array, setArray] = React.useState([]);
    const [newA, setnewA] = React.useState("");

    function add() {
        setArray([...array, newA]);
        setnewA(""); // Clear the input after adding
    }
//   function del() {}
  return (
    <div>
       <input type="text" value={newA} onChange={(e) => setnewA(e.target.value)} />
            <button onClick={add}>Add</button>
            <ul>
                {array.map((a, index) => (
                    <li key={index}>{a} <button>Del</button></li>
                ))}
            </ul>
    </div>
  );
}

export default Todo;
