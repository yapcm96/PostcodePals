// import Button from "../Button/Button";
import React, { useState, useEffect } from "react";

import TaskPage from "../../pages/TaskPage";
import { Link } from "react-router-dom";
import style from "./task.module.scss";
import { BiTask, BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Task = ({ taskItem, index }) => {
  const taskURL = `/tasks/${taskItem.id}`;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      setShow(false);
    }
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <Link
      to={taskURL}
      className={`${style.task} ${show && style.show}`}
      style={{
        transition: "opacity 350ms ease-in-out, transform 350ms ease-in-out",
        transitionDelay: `${index * 50}ms`,
      }}
    >
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

      <div
        className={
          taskItem.completed
            ? style.completed
            : taskItem.assigned
            ? style.assigned
            : style.unassigned
        }
      >
        {taskItem.completed ? (
          <h5>Completed</h5>
        ) : (
          <>{taskItem.assigned ? <h5>Assigned</h5> : <h5>Unassigned</h5>} </>
        )}
      </div>
    </Link>
  );
};

export default Task;
