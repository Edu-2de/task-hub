import '../styles/TaskList.css';
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return <p  className="no-tasks">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Client: {task.client}</p>
          <button onClick={() => deleteTask(task.id)} className="delete-button">
            Deletar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;