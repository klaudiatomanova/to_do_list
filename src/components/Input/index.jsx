import React, { useState } from "react";
import { faPlus, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Input/Input.css";
import "../TodoItem/TodoItem.css";
import "../List/List.css";

const Input = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (e) => {
    e.preventDefault();
    //accesswhatever is inserted into the input element
    setNewTodo(e.target.value);
  };

  const handleTodo = (e) => {
    //cancel the default action normally taken
    e.preventDefault();
    //if the input field is empty, don't do anything (create a list item that is empty)
    if (newTodo === "") return;
    //display the new todo in the unordered list as a list item
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    //after pressing enter the input is reset back to an empty input with the placeholder
    setNewTodo("");
  };

  //by determining an id of a todo removes the todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
          <button className="btn btn-add">
            <div className="new-todo-icon">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </button>
        </div>
        <ul className="list-todo-group">
          <h3 className="list-heading">My Todos</h3>
          {todos.map((todo) => (
            <li key={todo.id} className="list-todo-item">
              <div className="todo-item-added">
                <h6 className="added-todo-item">{todo.text}</h6>
                <button className="btn btn-edit">
                  <span className="item-edit">
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                </button>
                <button className="btn btn-complete">
                  <span className="item-complete">
                    <FontAwesomeIcon
                      onClick={() => removeTodo(todo.id)}
                      icon={faCheck}
                    />
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Input;
