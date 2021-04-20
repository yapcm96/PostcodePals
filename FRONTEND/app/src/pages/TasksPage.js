import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks/Tasks";
import Dropdowns from "../components/Dropdowns/Dropdowns";
import Button from "../components/Button/Button";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  // when the page loads
  // to load the data from the server
  useEffect(() => {
    const fetchFromAPI = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    };
    fetchFromAPI();
  }, []);

  // write fetchTasks func
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <h1>Tasks</h1>
      <Dropdowns />
      <Link exact to="/tasks/new">
        <Button>Add Task</Button>
      </Link>
      <Tasks taskList={tasks} />
    </div>
  );
};

export default TasksPage;
