import './styles/App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default App;
