import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p className="no-tasks">No tasks added yet!</p> : null}
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            toggleTaskCompletion={() => toggleTaskCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
