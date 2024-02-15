import React, { useRef } from "react";

function Todo() {
  const [array, setarray] = React.useState([]);

  const [newItem, setnewItem] = React.useState("")

  let emptinp= useRef()

  function adding() {

    setarray([...array, newItem]);
    emptinp.current.value=''
  }

  function del(ind) {
    array.splice(ind, 1);
    setarray([...array]);
  }
  return (
    <div className='a' >
      <input type="text" ref={emptinp} onKeyUp={(e)=>{setnewItem(e.target.value)}} />
      <button onClick={adding}>Add</button>
      <ul>
        {array.map((k, ind) => {
          return (
            <li>
              {k} <button onClick={() => {del(ind)}}>Delete</button>

              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
