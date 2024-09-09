import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} removeTask={removeTask} />
      ))}
    </ul>
  );
}

export default TaskList;
