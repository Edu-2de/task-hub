import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css';
import { useTasks } from '../context/TaskContext';

const CalendarPage = () => {
  const { tasks } = useTasks();
  const [selectedDate, setSelectedDate] = useState(new Date());

 
  const tasksForSelectedDate = tasks.filter((task) => task.dueDate === selectedDate.toISOString().split('T')[0]);

  return (
    <div className="calendar-page">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const hasTasks = tasks.some((task) => task.dueDate === date.toISOString().split('T')[0]);
          return hasTasks ? <span className="dot"></span> : null;
        }}
      />
      <div className="task-list">
        <h2>Tarefas para {selectedDate.toLocaleDateString()}</h2>
        {tasksForSelectedDate.length > 0 ? (
          <ul>
            {tasksForSelectedDate.map((task) => (
              <li key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma tarefa para esta data.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;