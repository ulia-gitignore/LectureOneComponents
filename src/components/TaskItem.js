import React from "react";

function TaskItem({ task, index, removeTask }) {
  return (
    <li className="task-item">
      {task}
      <button className="remove-button" onClick={() => removeTask(index)}>
        Удалить
      </button>
    </li>
  );
}

export default TaskItem;
