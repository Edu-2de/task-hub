// src/components/TaskItem.jsx
import '../styles/TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3 onClick={() => onToggleComplete(task.id)}>{task.title}</h3>
      <p>{task.description}</p>
      <p className="due-date">Due: {task.dueDate}</p>
      <p className="due-date">Client: {task.client}</p>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
