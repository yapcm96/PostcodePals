import { useState, useEffect } from "react";

const NewTaskForm = ({ addTask }) => {
  const [id, setId] = useState();
  const [task, setTask] = useState("");
  const [type_of_task, setType_of_task] = useState("");
  const [location, setLocation] = useState("");
  const [estimated_duration_mins, setEstimated_duration_mins] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [assigned, setAssigned] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [task_setter, setTask_Setter] = useState("");

  const submitTask = (e) => {
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
    <form onSubmit={submitTask}>
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
