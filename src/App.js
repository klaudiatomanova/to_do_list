import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <h3 className="heading">New Todo</h3>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
