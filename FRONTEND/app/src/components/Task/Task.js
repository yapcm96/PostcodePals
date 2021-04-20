import Button from "../Button/Button";
import TaskPage from "../../pages/TaskPage";
import { Link } from "react-router-dom";

const Task = ({ taskItem }) => {
  const taskURL = `/tasks/${taskItem.id}`;

  return (
    <Link to={taskURL}>
      <h3>{taskItem.task}</h3>
      <h4>{taskItem.type_of_task}</h4>
      <Button buttonText="assign" />
    </Link>
  );
};

export default Task;
