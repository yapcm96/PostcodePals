import React, { useState, useEffect } from "react";
import Tasks from "../components/Tasks/Tasks";
import Dropdowns from "../components/Dropdowns/Dropdowns";

const VolunteerPage = () => {
  // const task = [
  // {
  //   model: "pages.task",
  //   pk: 1,
  //   fields: {
  //     task: "Pick up groceries from Tesco",
  //     type_of_task: "Shopping",
  //     location: "Edinburgh",
  //     estimated_duration_mins: 60,
  //     deadline: "Thursday 8 April at 12pm",
  //     notes: "White bread, eggs, whole milk",
  //     task_setter: "Beth",
  //   },
  // },
  //   {
  //     model: "pages.task",
  //     pk: 2,
  //     fields: {
  //       task: "Mow the lawn",
  //       type_of_task: "Gardening",
  //       location: "London",
  //       estimated_duration_mins: 40,
  //       deadline: "Thursday 8 April at 6pm",
  //       notes: "Bonus points if you make a stripe pattern in the grass",
  //       task_setter: "Mahbub",
  //     },
  //   },
  //   {
  //     model: "pages.task",
  //     pk: 3,
  //     fields: {
  //       task: "Take bins out",
  //       type_of_task: "Household Tasks",
  //       location: "Chelmsford",
  //       estimated_duration_mins: 10,
  //       deadline: "Wednesday 7 April at 4pm",
  //       notes: "",
  //       task_setter: "Asel",
  //     },
  //   },
  // ];

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
    const res = await fetch("http://localhost:8000/tasks", {
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
      <h1>Volunteer</h1>
      <Dropdowns />
      <Tasks taskList={tasks} />
    </div>
  );
};

export default VolunteerPage;
