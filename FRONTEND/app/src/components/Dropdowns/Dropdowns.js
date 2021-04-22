import Dropdown from "../Dropdown/Dropdown";
import style from "./dropdowns.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Dropdowns = ({ filterChoiceFetch, clearFilterFetch }) => {
  const [openIndex, setOpenIndex] = useState();
  // when location filter changes call back end with new filter:
  const [locationFilter, setLocationFilter] = useState("");
  const [taskTypeFilter, setTaskTypeFilter] = useState("");
  const [sortByValue, setSortByValue] = useState("");

  const openDropdown = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const filterSubmit = (e) => {
    e.preventDefault();
    filterChoiceFetch(locationFilter, taskTypeFilter, sortByValue);
  };

  const clearFilters = () => {
    clearFilterFetch();
  }

  // console.log(locationFilter);
  return (
    <div>
      <div className={style.dropdowns}>
        <Dropdown
          options={["Duration", "Task Setter"]}
          label="Sort by"
          isOpen={openIndex === 0}
          onClick={() => openDropdown(0)}
          // dropdownType={'sortby'}
          onChange={setSortByValue}
        />
        <Dropdown
          options={["London", "Edinburgh", "Cardiff"]}
          label="Location"
          s
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
      <Button type="submit" onClick={filterSubmit}>
        Filter
      </Button>
      <Button onClick={clearFilters}>Clear Filters</Button>
    </div>
  );
};

export default Dropdowns;
