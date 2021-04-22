import Task from "../Task/Task";
import style from "./tasks.module.scss";

const Tasks = ({ taskList, fetched }) => {
  console.log(taskList);
  if (taskList.length === 0 && fetched) {
    return <h1>No tasks found</h1>;
  } else {
    return (
      <div className={style.tasks}>
        {taskList.map((task, i) => (
          <Task index={i} key={task.id} taskItem={task} />
        ))}
      </div>
    );
  }
};

export default Tasks;
