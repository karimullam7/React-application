import { createStore } from "redux";
import todoreducer from "../Reducers/todo.reducer";

export const store = createStore(todoreducer);
