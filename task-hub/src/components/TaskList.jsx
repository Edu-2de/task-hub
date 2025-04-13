import TaskItem from './TaskItem';
import '../styles/TaskList.css';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, toggleTaskComplete, deleteTask } = useTasks();

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={toggleTaskComplete}
            onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
