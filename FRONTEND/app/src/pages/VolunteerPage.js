import Tasks from "../components/Tasks/Tasks";
import Dropdown from "../components/Dropdown/Dropdown";

const VolunteerPage = () => {
  const task = [
    {
      pk: 1,
      fields: {
        task: "Pick up groceries from Tesco",
        type_of_task: "Shopping",
        location: "Edinburgh",
        estimated_duration_mins: 60,
        deadline: "Thursday 8 April at 12pm",
        notes: "White bread, eggs, whole milk",
        task_setter: "Beth",
      },
    },
    {
      model: "pages.task",
      pk: 2,
      fields: {
        task: "Mow the lawn",
        type_of_task: "Gardening",
        location: "London",
        estimated_duration_mins: 40,
        deadline: "Thursday 8 April at 6pm",
        notes: "Bonus points if you make a stripe pattern in the grass",
        task_setter: "Mahbub",
      },
    },
    {
      model: "pages.task",
      pk: 3,
      fields: {
        task: "Take bins out",
        type_of_task: "Household Tasks",
        location: "Chelmsford",
        estimated_duration_mins: 10,
        deadline: "Wednesday 7 April at 4pm",
        notes: "",
        task_setter: "Asel",
      },
    },
  ];

  return (
    <div>
      <h1>Volunteer</h1>
      <Dropdown />
      <Tasks taskList={task} />
    </div>
  );
};

export default VolunteerPage;
