import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setPage, page, isOpen, toggleSidebar }) => {
  return (
    <>
      <nav className={`sidebar ${isOpen ? '' : 'closed'}`}>
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
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '×' : '☰'}
      </button>
    </>
  );
};

export default Sidebar;