import './styles/App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import LoginForm from './components/LoginForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  if (!user) {
    return (
      <div>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Bem-vindo ao Task Hub</h1>
          <p>Gerencie suas tarefas de forma simples e eficiente.</p>
          <button
            onClick={() => setIsRegistering(false)}
            style={{ marginRight: '10px', padding: '10px 20px' }}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            style={{ padding: '10px 20px' }}
          >
            Registrar
          </button>
        </div>
        <LoginForm onLogin={setUser} isRegistering={isRegistering} />
      </div>
    );
  }

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