import './styles/App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import CalendarPage from './components/CalendarPage';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [page, setPage] = useState('tasks');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
    <TaskProvider user={user}>
      <div className="app">
        <Header />
        <Sidebar
          setPage={setPage}
          page={page}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div
          className="content"
          style={{
            marginLeft: isSidebarOpen ? '250px' : '0',
            padding: '20px',
            transition: 'margin-left 0.3s ease',
            marginTop: '60px', // Ajuste para o cabeçalho
          }}
        >
          {page === 'tasks' && (
            <>
              <TaskForm />
              <TaskList />
            </>
          )}
          {page === 'calendar' && <CalendarPage />}
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;