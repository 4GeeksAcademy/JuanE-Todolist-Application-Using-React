import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="form-control"
          onKeyUp={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              addTask(e.target.value.trim());
              e.target.value = '';
            }
          }}
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
