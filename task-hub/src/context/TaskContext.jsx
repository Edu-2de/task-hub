import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  const addTask = (title, description, dueDate, client) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      client,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };



  const toggleTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };



  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };



  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskComplete, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
