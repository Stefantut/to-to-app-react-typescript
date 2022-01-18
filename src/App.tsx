import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <h1>To do App</h1>
      <header>
        <div className="inputs-container">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline (days)" />
        </div>
        <button>Add Task </button>
      </header>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
