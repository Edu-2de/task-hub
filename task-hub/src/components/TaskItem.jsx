// src/components/TaskItem.jsx
import '../styles/TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
