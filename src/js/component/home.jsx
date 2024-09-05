import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }
    return (
      <>
        <div className="container">
          <h1>Todos</h1>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="form-control"
            value={newTask}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />
          <ul className="list-group ">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                {task}
                <button className='delete-button' onClick={(onClick) => removeTask(index)}>x</button>
              </li>
            ))}
            <li id='footer' className="list-group-item"></li>
          </ul>
        </div>
        <div className="element">
          <p>{tasks.length} item(s) left</p>
        </div>
      </>
    );
}

  export default TodoList;
