import "./App.css";
import Counter from "./counter";
import Todo from "./todo";
import React from "react";

function App() {
var [v, setv]=React.useState(100)
function adding(){
  setv(v+100)
}

  return (
    <div className="App">
      <h1>Welcome hyderabad:{v}</h1>
      <button onClick={adding}>Addingo</button>
      <Counter></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;
