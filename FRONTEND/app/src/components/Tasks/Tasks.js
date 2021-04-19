import React from "react";
import Task from "../Task/Task";

const Tasks = ({ taskList }) => {
  console.log(taskList);
  if (taskList.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {taskList.map((task) => (
          <Task key={task.id} taskItem={task} />
        ))}
      </>
    );
  }
};

export default Tasks;
