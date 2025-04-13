import './styles/App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';


function App() {
  return (
    <TaskProvider>
      <div>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
