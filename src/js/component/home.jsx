import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="home-container">
      <h1>Mi Lista De Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Añade una tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown} // Detecta la tecla Enter
        />
      </div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No hay tareas, añade tareas</li>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="task-item"
              onMouseEnter={(e) => (e.target.classList.add("hover"))}
              onMouseLeave={(e) => (e.target.classList.remove("hover"))}
            >
              {t}
              <button onClick={() => removeTask(index)}>🗑️</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
