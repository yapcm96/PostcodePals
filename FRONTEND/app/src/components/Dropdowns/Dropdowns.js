import Dropdown from "../Dropdown/Dropdown";
import style from "./dropdowns.module.scss";
import { useState } from "react";
import Button from "../Button/Button";


const Dropdowns = ({filterChoiceFetch}) => {
  const [openIndex, setOpenIndex] = useState();
  // when location filter changes call back end with new filter:
  const [locationFilter, setLocationFilter] = useState('');
  const [taskTypeFilter, setTaskTypeFilter] = useState('');
  const openDropdown = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

   const filterSubmit = (e) => {
     e.preventDefault()
     filterChoiceFetch(locationFilter, taskTypeFilter)
   }


  // console.log(locationFilter);
  return (
    <div>
      <div className={style.dropdowns}>
        <Dropdown
          options={["Location", "Type of Task", "Duration"]}
          label="Sort by"
          isOpen={openIndex === 0}
          onClick={() => openDropdown(0)}
          // dropdownType={'sortby'}
          
        />
        <Dropdown
          options={["London", "Edinburgh", "Cardiff"]}
          label="Location"
          isOpen={openIndex === 1}
          onClick={() => openDropdown(1)}

          // this is built into all forms in HTML (and ours)
          onChange={setLocationFilter}

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
          onChange={setTaskTypeFilter}
        />
      </div>
      <Button type="submit"
      onClick={filterSubmit}
      >Filter</Button>
    </div>
  );
};

export default Dropdowns;
