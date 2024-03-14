import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../Store/action";

function Todo(props){
    const [newTask, setNewTask]=React.useState('')
    function addTask(){
        props.dispatch(addTodo(newTask))
    }

    function deltask(i){
        props.dispatch(deleteTodo(i))
    }

    return(
        <div className="bt">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} />
            <button onClick={addTask}>Add task</button>
            {
                props.todos.todos.map((t,i)=>{
                    return(<li key={i}>{t}
                    &nbsp;&nbsp;
                    <button onClick={()=>{deltask(i)}}>Delete</button>
                    </li>)
                })
            }
        </div>
    )
}

export default connect(function(store){return store}) (Todo);