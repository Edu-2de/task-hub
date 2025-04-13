// src/components/TaskList.jsx
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
