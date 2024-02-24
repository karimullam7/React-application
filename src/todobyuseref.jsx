import React from "react";

function Todolist() {
  var [list, setList] = React.useState(["karim", "sravani", "kavya"]);
  var [nw, setNw]= React.useState("");

  function add(e){
  setList(()=>{
    
    // document.querySelector('input').value=""    
    return [...list, nw]
    

  } )

  }

  return (
    <div>
      <input type="text" onChange={(e)=>{setNw(e.target.value)}}/>
      <button  onClick={add}>Add List</button>
        {
            list.map((listo)=>{
                return <li>{listo}</li>
            })
        }

    </div>
  );
}

export default Todolist;
