import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./interfaces";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>(""),
    [deadline, setDeadline] = useState<number>(0),
    [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <h1>To do App</h1>
      <header>
        <div className="inputs-container">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task </button>
      </header>
      <main className="todoList"></main>
    </div>
  );
};

export default App;
