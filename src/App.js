import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <h3 className="heading">New Todo</h3>
          <Input />
          <List {todos.map((todo) => (
            <TodoItem {todo.text} />
          ))}/>
        </div>
      </div>
    </div>
  );
}

export default App;
