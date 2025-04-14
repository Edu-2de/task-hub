import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setPage, page, isOpen, toggleSidebar }) => {
  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Abrir'}
      </button>
      <nav className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <h2>Task Hub</h2>
        <ul>
          <li
            className={page === 'tasks' ? 'active' : ''}
            onClick={() => setPage('tasks')}
          >
            Criar Tarefas
          </li>
          <li
            className={page === 'calendar' ? 'active' : ''}
            onClick={() => setPage('calendar')}
          >
            Calendário
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;