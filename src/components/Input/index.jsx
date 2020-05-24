import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Input/Input.css";

const Input = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    e.target.reset();
  };

  return (
    <div className="add-new-todo-item">
      <form onSubmit={handleTodo}>
        <div className="new-todo-container">
          <input
            type="text"
            className="new-todo-input"
            value={newTodo}
            onChange={handleNewTodo}
            placeholder="new todo item..."
          />
        </div>
        <button className="btn btn-add">
          <div className="new-todo-icon">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Input;
