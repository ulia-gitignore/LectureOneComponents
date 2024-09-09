import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
    </div>
  );
}

export default TaskInput;
