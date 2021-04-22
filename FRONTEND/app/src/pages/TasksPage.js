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

  const clearFilterFetch = async () => {
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTasks(data);
    return data;
  };

  const filterChoiceFetch = async (
    locationFilter,
    taskTypeFilter,
    sortByValue
  ) => {
    if (sortByValue === "Duration") {
      sortByValue = "estimated_duration_mins";
    }
    if (sortByValue === "Task Setter") {
      sortByValue = "task_setter";
    }

    let urlString = "http://localhost:8000/tasks-new?";
    const dict = {
      location: locationFilter,
      type_of_task: taskTypeFilter,
      ordering: sortByValue,
    };
    // logic to check if either of filters are empty strings
    // needs a hard refresh to change back to no filter option
    for (let i in dict) {
      if (dict[i] !== "") {
        // append the filter to the urlString
        urlString = urlString + `${i}=${dict[i]}&`;
        console.log(urlString);
      }
    }

    const res = await fetch(urlString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTasks(data);
    return data;
  };

  return (
    <div className={style.taskspage}>
      <Dropdowns
        filterChoiceFetch={filterChoiceFetch}
        clearFilterFetch={clearFilterFetch}
      />
      <Button className={style.addTaskBtn} linkTo="/tasks/new">
        <MdAddCircle />
        <span>Add Task</span>
      </Button>
      <Tasks taskList={tasks} />
    </div>
  );
};

export default TasksPage;
