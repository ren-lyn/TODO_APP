import React from 'react';

function TaskItem({ task, toggleTaskCompletion }) {
  return (
    <li className="task-item">
      <span className={task.completed ? 'completed' : ''} onClick={toggleTaskCompletion}>
        {task.text}
      </span>
      <div className="task-buttons">
        <button className="complete-btn" onClick={toggleTaskCompletion}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>

      </div>
    </li>
  );
}

export default TaskItem;
