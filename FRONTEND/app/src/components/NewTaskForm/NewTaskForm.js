import { useState, useEffect } from "react";

const NewTaskForm = ({
  initialTask = {
    id: 0,
    task: "",
    type_of_task: "",
    location: "",
    estimated_duration_mins: 0,
    deadline: "",
    notes: "",
    assigned: false,
    completed: false,
    task_setter: "",
  },
}) => {
  console.log("newTaskForm: " + initialTask);
  const [id, setId] = useState(initialTask.id);
  const [task, setTask] = useState(initialTask.task);
  const [type_of_task, setType_of_task] = useState(initialTask.type_of_task);
  const [location, setLocation] = useState(initialTask.location);
  const [estimated_duration_mins, setEstimated_duration_mins] = useState(
    initialTask.estimated_duration_mins
  );
  const [deadline, setDeadline] = useState(initialTask.deadline);
  const [notes, setNotes] = useState(initialTask.notes);
  const [assigned, setAssigned] = useState(initialTask.assigned);
  const [completed, setCompleted] = useState(initialTask.completed);
  const [task_setter, setTask_Setter] = useState(initialTask.task_setter);

  const addTask = async (task) => {
    console.log(task);
    let resBody = JSON.stringify(task);
    console.log(resBody);
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: resBody,
    });
  };

  const updateTaskInBackend = async (task) => {
    console.log(task);
    let resBody = JSON.stringify(task);
    const res = await fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: resBody,
    });
  };

  const updateTask = (e) => {
    console.log("updating an old task");
    e.preventDefault();
    updateTaskInBackend({
      id,
      task,
      location,
      estimated_duration_mins,
      deadline,
      notes,
      assigned,
      completed,
      task_setter,
    });
  };

  const submitTask = (e) => {
    console.log("submiting a new task");
    e.preventDefault();

    addTask({
      id,
      task,
      location,
      estimated_duration_mins,
      deadline,
      notes,
      assigned,
      completed,
      task_setter,
    });
    setId(0);
    setTask("");
    setLocation("");
    setEstimated_duration_mins(0);
    setDeadline("");
    setNotes("");
    setAssigned(false);
    setCompleted(false);
    setTask_Setter("");
  };

  return (
    <form
      onSubmit={
        initialTask.task === "" ? (e) => submitTask(e) : (e) => updateTask(e)
      }
    >
      <label>Id</label>
      <input
        type="number"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <label>Task</label>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <label>Type of Task</label>
      <input
        type="text"
        name="type_of_task"
        value={type_of_task}
        onChange={(e) => setType_of_task(e.target.value)}
      />
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>Estimated duration</label>
      <input
        type="number"
        name="estimated_duration_mins"
        value={estimated_duration_mins}
        onChange={(e) => setEstimated_duration_mins(e.target.value)}
      />
      <label>Deadline</label>
      <input
        type="text"
        name="deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <label>Notes</label>
      <input
        type="text"
        name="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label>Assigned</label>
      <input
        type="checkbox"
        checked={assigned}
        value={assigned}
        onChange={(e) => setAssigned(e.currentTarget.checked)}
      ></input>
      <label>Completed</label>
      <input
        type="checkbox"
        checked={completed}
        value={completed}
        onChange={(e) => setCompleted(e.currentTarget.checked)}
      ></input>
      <label>Task setter</label>
      <input
        type="text"
        name="task_setter"
        value={task_setter}
        onChange={(e) => setTask_Setter(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default NewTaskForm;
