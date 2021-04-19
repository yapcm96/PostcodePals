import Button from "../Button/Button";

const Task = ({ taskItem }) => {
  return (
    <div>
      <h3>{taskItem.fields.task}</h3>
      <h4>{taskItem.fields.type_of_task}</h4>
      <Button buttonText="assign" />
    </div>
  );
};

export default Task;
