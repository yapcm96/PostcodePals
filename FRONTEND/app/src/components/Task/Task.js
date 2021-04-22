// import Button from "../Button/Button";
import TaskPage from "../../pages/TaskPage";
import { Link } from "react-router-dom";
import style from "./task.module.scss";
import { BiTask, BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Task = ({ taskItem }) => {
  const taskURL = `/tasks/${taskItem.id}`;
  // console.log(taskItem.id)

  return (
    <Link to={taskURL} className={style.task}>
      <h3>
        <BiTask /> {taskItem.task}
      </h3>
      <h4>
        <GoLocation /> {taskItem.location}
      </h4>
      <h4>
        <BiTimeFive /> {taskItem.deadline}
      </h4>
    </Link>
  );
};

export default Task;
