// import Button from "../Button/Button";
import TaskPage from "../../pages/TaskPage";
import { Link } from "react-router-dom";
import style from "./task.module.scss";
import { BiTask, BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Task = ({ taskItem }) => {
  const taskURL = `/tasks/${taskItem.id}`;

  return (
    <Link to={taskURL} className={style.task}>
      <div className={style.summary}>
        <h3>
          <BiTask /> {taskItem.task}
        </h3>
        <h4>
          <GoLocation /> {taskItem.location}
        </h4>
        <h4>
          <BiTimeFive /> {taskItem.deadline}
        </h4>
      </div>

      <div className={
        taskItem.completed ? style.completed :
        taskItem.assigned ? style.assigned : style.unassigned
      }>
        
        {taskItem.completed ? <h5>Completed</h5> : <>
        {taskItem.assigned ? <h5>Assigned</h5> : <h5>Unassigned</h5>} </>}
      </div>

    </Link>
  );
};

export default Task;
