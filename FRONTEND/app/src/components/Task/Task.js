// import Button from "../Button/Button";
import TaskPage from "../../pages/TaskPage";
import { Link } from "react-router-dom";

const Task = ({ taskItem }) => {
  const taskURL = `/tasks/${taskItem.id}`;

  return (
    <Link exact to={taskURL}>
      <h3>Task: {taskItem.task}</h3>
      <h4>Location: {taskItem.location}</h4>
      <h4>Deadline: {taskItem.deadline}</h4>
      
    </Link>
  );
};

export default Task;
