import { createContext, useContext, useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children, user }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const userTasks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTasks(userTasks);
        } catch (error) {
          console.error("Erro ao carregar tarefas:", error);
        }
      };
      fetchTasks();
    }
  }, [user]);

  const addTask = async (title, description, dueDate, client) => {
    try {
      const newTask = {
        title,
        description,
        dueDate,
        client,
        completed: false,
        userId: user.uid,
      };
      const docRef = await addDoc(collection(db, "tasks"), newTask);
      setTasks((prevTasks) => [...prevTasks, { id: docRef.id, ...newTask }]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };
  const toggleTaskComplete = async (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      const updatedTask = { ...task, completed: !task.completed };
      await updateDoc(doc(db, "tasks", id), { completed: updatedTask.completed });
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
    }
  };

  const deleteTask = async (taskId) => {
    await deleteDoc(doc(db, "tasks", taskId));
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskComplete, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};