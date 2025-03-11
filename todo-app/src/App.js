import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput.js';
import TaskList from './components/TaskList.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };


  return (
    <div className="App">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  );
}

export default App;
