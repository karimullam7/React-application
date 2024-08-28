import React from "react";
import { connect } from "react-redux";
import { store } from "../app/store/store";

function Todoslist(props) {
  function Del(i) {
    props.dispatch({ type: "delete", payload: i });
  }
  return (
    <div>
      {props.todo.map((l, i) => {
        return (
          <li>
            {l}
            <button
              onClick={() => {
                Del(i);
              }}
            >
              Del
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default connect((store) => store)(Todoslist);
