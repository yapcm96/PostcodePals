import React from "react";
import Task from "../Task/Task";

const Tasks = ({ taskList }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} taskItem={task} />
      ))}
    </>
  );
};

export default Tasks;
