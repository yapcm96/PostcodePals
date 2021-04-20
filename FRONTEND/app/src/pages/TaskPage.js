import { useState, useEffect } from "react";
import Button from "../components/Button/Button";

const TaskPage = (props) => {
  // pulls id from the url
  let id = props.match.params.id;

  // pull in the info from the database for the task with this id
  const [task, setTask] = useState({});
  console.log(task);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const taskFromServer = await fetchTask(id);

      setTask(taskFromServer);
    };
    fetchFromAPI();
  }, [id]);

  // write fetchTask func
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <h2>Task: {task.task}</h2>
      <p>Type of Task: {task.type_of_task}</p>
      <p>Location: {task.location}</p>
      <p>Estimated duration: {task.estimated_duration_mins}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Notes: {task.notes}</p>
      <p>Assigned: {task.assigned ? "True" : "False"}</p>
      <p>Completed: {task.completed ? "True" : "False"}</p>
      <p>Task setter: {task.task_setter}</p>
      <Button>{task.assigned ? "Mark as completed" : "Assign to me"}</Button>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default TaskPage;
