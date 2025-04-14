import { useState } from 'react';
import '../styles/TaskForm.css';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { addTask } = useTasks();
  const [client, setClient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    addTask(task.trim(), description.trim(), dueDate, client.trim());
    setTask('');
    setDescription('');
    setDueDate('');
    setClient('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Title"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        className="task-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="task-input"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        className="task-input"
        placeholder="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default TaskForm;
