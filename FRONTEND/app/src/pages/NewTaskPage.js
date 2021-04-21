import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import TaskPage from "./TaskPage";

const NewTaskPage = () => {
  // onsubmit of form>
  // function to POST to database
  // check if it then appears in task list
  //   submitTask;

  // const addTask = async (task) => {
  //   console.log(task);
  //   let resBody = JSON.stringify(task);
  //   console.log(resBody);
  //   const res = await fetch("http://localhost:8000/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: resBody,
  //   });
  // };
  return <NewTaskForm />;
};

export default NewTaskPage;
