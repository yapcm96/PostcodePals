import Dropdown from "../Dropdown/Dropdown";
import style from "./dropdowns.module.scss";
import { useState } from "react";
import Button from "../Button/Button";


const Dropdowns = ({filterChoice}) => {
  const [openIndex, setOpenIndex] = useState();
  // when location filter changes call back end with new filter:
  // const [locationFilter, setLocationFilter] = useState();
  const openDropdown = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  // console.log(locationFilter);
  return (
    <div>
      <div className={style.dropdowns}>
        <Dropdown
          options={["Location", "Type of Task", "Duration"]}
          label="Sort by"
          isOpen={openIndex === 0}
          onClick={() => openDropdown(0)}
          dropdownType={'location'}
          filterChoice= {filterChoice}
        />
        <Dropdown
          options={["London", "Edinburgh", "Cardiff"]}
          label="Location"
          isOpen={openIndex === 1}
          onClick={() => openDropdown(1)}

          // this is built into all forms in HTML (and ours)
          // onChange={setLocationFilter}
          
          // would then not neet these:
          dropdownType="location"
          filterChoice= {filterChoice}
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

          dropdownType="location"
          filterChoice= {filterChoice}
        />
        <Dropdown
          options={["20m", "40m", "60m"]}
          label="Duration"
          isOpen={openIndex === 3}
          onClick={() => openDropdown(3)}

          dropdownType="location"
          filterChoice= {filterChoice}
        />
      </div>
      <Button type="submit">Filter</Button>
    </div>
  );
};

export default Dropdowns;
