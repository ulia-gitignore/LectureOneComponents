import React, { useState } from "react";
import TaskInput from "./TaskInput";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
