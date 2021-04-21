import style from "./dropdown.module.scss";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({
  label,
  options,
  isOpen,
  onClick,
  onChange,
  filterChoice,
  dropdownType,
}) => {
  const [selected, setSelected] = useState(label);
  const stateChanged = (option, dropdownType) => {
    setSelected(option);
    // incase we want an onChange function later:
    if (onChange) {
      onChange(option);
    }
    // filterChoice(option, dropdownType)
  };
  return (
    <div className={style.dropdownBtn} onClick={onClick}>
      {/* What we had before:
      <label>{label}</label>
      <select>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select> */}
      <p className={style.label}>
        {selected} <FaCaretDown />
      </p>
      {isOpen && (
        <div className={style.dropdown}>
          {options.map((option) => (
            <div
              className={style.dropdownItem}
              key={option}
              onClick={() => stateChanged(option, dropdownType)}
              value={selected}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
