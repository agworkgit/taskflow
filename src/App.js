import { Helmet } from 'react-helmet';
import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import StatsChart from "./components/StatsChart";
import TaskFilters from "./components/TaskFilters";
import Footer from './components/Footer';

import { loadTasks, saveTasks } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [darkMode, setDarkMode] = useState(false);

  // Filters
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Save tasks whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) =>
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  // On mount, read dark mode preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedTheme);
    if (storedTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  // When toggling theme, save to LocalStorage
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", newTheme);
      return newTheme;
    });
  };

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    const categoryMatch =
      categoryFilter === "All" || task.category === categoryFilter;
    const priorityMatch =
      priorityFilter === "All" || task.priority === priorityFilter;
    return categoryMatch && priorityMatch;
  });

  return (
    <>
      <Helmet>
        <title>TaskFlow - Smart Task Management</title>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <meta name="description" content="Manage, track, and visualize your tasks with TaskFlow." />
        <meta property="og:title" content="TaskFlow - Smart Task Management" />
        <meta property="og:description" content="Manage, track, and visualize your tasks with TaskFlow." />
        <meta
          property="og:image"
          content={darkMode ? "/assets/logo-dark-theme.png" : "/assets/logo-light-theme.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TaskFlow - Smart Task Management" />
        <meta name="twitter:description" content="Manage, track, and visualize your tasks with TaskFlow." />
        <meta name="twitter:image" content="/assets/og-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-[#343541] transition-colors">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="container mx-auto p-4">
          <TaskForm addTask={addTask} />
          <TaskFilters
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
          <TaskList
            tasks={filteredTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
            setTasks={setTasks}
          />
          <StatsChart tasks={tasks} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
