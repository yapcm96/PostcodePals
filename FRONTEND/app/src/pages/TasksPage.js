import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks/Tasks";
import Dropdowns from "../components/Dropdowns/Dropdowns";
import Button from "../components/Button/Button";
import style from "../styles/pagesStyles/taskspage.module.scss";
import { MdAddCircle } from "react-icons/md";
//import Dropdown from "../components/Dropdown/Dropdown"

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

  const filterChoice = async (option, dropdownType) => {
    const res = await fetch(
      `http://localhost:8000/tasks-new?${dropdownType}=${option}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    console.log(data);
    setTasks(data);
    return data;
  };

  return (
    <div>
      <Dropdowns filterChoice={filterChoice} />

      <Button className={style.addTaskBtn} linkTo="/tasks/new">
        <MdAddCircle />
        <span>Add Task</span>
      </Button>
      <Tasks taskList={tasks} />
    </div>
  );
};

export default TasksPage;
