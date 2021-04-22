import React from "react";
import Task from "../Task/Task";
import style from "./tasks.module.scss";

const Tasks = ({ taskList }) => {
  console.log(taskList);
  if (taskList.length === 0) {
    return <h1>No tasks found</h1>;
  } else {
    return (
      <div className={style.tasks}>
        {taskList.map((task) => (
          <Task key={task.id} taskItem={task} />
        ))}
      </div>
    );
  }
};

export default Tasks;
