import React, { useState } from "react";
import { faPen, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../TodoItem/TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id} className="list-todo-item">
      <div className="todo-item-added">
        <h6 className="added-todo-item">{todo.text}</h6>
        <button className="btn btn-add">
          <span className="item-add">
            <FontAwesomeIcon icon={faPen} />
          </span>
        </button>
        <button className="btn btn-complete">
          <span className="item-complete">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
