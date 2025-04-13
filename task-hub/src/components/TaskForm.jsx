// src/components/TaskForm.jsx
import { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    onAddTask(task.trim());
    setTask('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default TaskForm;
