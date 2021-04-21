import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import style from "../styles/pagesStyles/taskpage.module.scss";

const TaskPage = (props) => {
  // pulls id from the url
  let id = props.match.params.id;

  // pull in the info from the database for the task with this id
  const [task, setTask] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // console.log(task);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const taskFromServer = await fetchTask(id);

      setTask(taskFromServer);
    };
    fetchFromAPI();
  }, [id, isEditing]);

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

  const handleClickAssignButton = async (id) => {
    //want to change the value of assigned to true
    console.log(id);
    console.log(task);
    // this is successfully changing the value
    const assignedTask = { ...task, assigned: !task.assigned };
    // changes the state of Task so that it updates on the page
    // maybe we should do this only after the PUT request
    setTask(assignedTask);
    console.log("changed assigned to true");
    console.log(assignedTask);
    let resBody = JSON.stringify(assignedTask);
    // do a PUT request to change the value on the database
    // PUT req working
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: resBody,
    });
  };

  const handleClickCompleteButton = async (id) => {
    const completedTask = { ...task, completed: true };
    setTask(completedTask);
    let resBody = JSON.stringify(completedTask);
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: resBody,
    });
  };

  const updateTask = async () => {
    // do PUT req here to update the server
    console.log("update the task");
  };

  console.log(isEditing);

  if (isEditing) {
    console.log("isEditing: " + task);
    return (
      <NewTaskForm
        initialTask={task}
        addTask={updateTask}
        setIsEditing={setIsEditing}
      />
    );
  }

  return (
    <div className={style.task}>
      {/* Could have done like this */}
      {/* <h2>
        Task: {isEditing ? <Textfield initialValue={task.task} /> : task.task}
      </h2> */}
      <h2>Task: {task.task}</h2>
      <p>Type of Task: {task.type_of_task}</p>
      <p>Location: {task.location}</p>
      <p>
        Estimated duration: {Math.round(task.estimated_duration_mins)} minutes
      </p>
      <p>Deadline: {task.deadline}</p>
      <p>Notes: {task.notes}</p>
      <p>Assigned: {task.assigned ? "True" : "False"}</p>
      <p>Completed: {task.completed ? "True" : "False"}</p>
      <p>Task setter: {task.task_setter}</p>
      <div>
        {task.completed && <p>This task has completed!</p>}
        {!task.completed && (
          <Button
            onClick={
              task.assigned
                ? () => handleClickCompleteButton(task.id)
                : () => handleClickAssignButton(task.id)
            }
          >
            {task.assigned ? "Mark as completed" : "Assign to me"}
          </Button>
        )}
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default TaskPage;
