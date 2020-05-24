import React from "react";
import TodoItem from "../TodoItem";
import "../List/List.css";

const List = () => {
  return (
    <ul className="list-todo-group">
      <h3 className="list-heading">My Todos</h3>
      <TodoItem />
    </ul>
  );
};

export default List;
