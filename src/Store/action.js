import { ADDTASK, DELTASK } from "./actiontypes"

export function addTodo(task){
    return {type:ADDTASK, payload:task}
}
export function deleteTodo(index){
    return {type:DELTASK, payload:index}
}