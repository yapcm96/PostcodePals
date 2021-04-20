import Dropdown from "../Dropdown/Dropdown";
import style from "./dropdowns.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Dropdowns = () => {
  const [openIndex, setOpenIndex] = useState();
  const openDropdown = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      <div className={style.dropdowns}>
        <Dropdown
          options={["Location", "Type of Task", "Duration"]}
          label="Sort by"
          isOpen={openIndex === 0}
          onClick={() => openDropdown(0)}
        />
        <Dropdown
          options={["London", "Edinburgh", "Cardiff"]}
          label="Location"
          isOpen={openIndex === 1}
          onClick={() => openDropdown(1)}
        />
        <Dropdown
          options={[
            "Shopping",
            "Gardening",
            "Emotional Support",
            "Household Tasks",
          ]}
          label="Type"
          isOpen={openIndex === 2}
          onClick={() => openDropdown(2)}
        />
        <Dropdown
          options={["20m", "40m", "60m"]}
          label="Duration"
          isOpen={openIndex === 3}
          onClick={() => openDropdown(3)}
        />
      </div>
      <Button>Filter</Button>
    </div>
  );
};

export default Dropdowns;
