import { useState } from 'react';
import '../styles/TaskForm.css';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task.trim());
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
