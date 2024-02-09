import React, { useState } from 'react';
import { Link } from "react-router-dom";
const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleMarkAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = <s>{tasks[index]}</s>;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-3">
      <h2>ToDo List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={task}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span onClick={() => handleMarkAsDone(index)}>{task}</span>
            <div>
              <button className="btn btn-success mx-2" onClick={() => handleMarkAsDone(index)}>
                Mark as Done
              </button>
              <button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;