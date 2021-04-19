import Dropdown from "../Dropdown/Dropdown";

const Dropdowns = () => {
  return (
    <div>
      <Dropdown
        options={["Location", "Type of Task", "Duration"]}
        label="Sort By: "
      />
      <Dropdown
        options={["London", "Edinburgh", "Cardiff"]}
        label="Filter by Location: "
      />
      <Dropdown
        options={[
          "Shopping",
          "Gardening",
          "Emotional Support",
          "Household Tasks",
        ]}
        label="Type of Task: "
      />
      <Dropdown options={["20m", "40m", "60m"]} label="Duration: " />
    </div>
  );
};

export default Dropdowns;
