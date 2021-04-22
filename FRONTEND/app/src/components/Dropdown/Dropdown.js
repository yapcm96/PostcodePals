import style from "./dropdown.module.scss";
import { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({
  label,
  options,
  isOpen,
  onClick,
  onChange,
  setOpenIndex,
}) => {
  const ref = useRef();
  const [selected, setSelected] = useState(label);
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setOpenIndex(-1);
      }
    };
    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen]);
  const stateChanged = (option) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={style.dropdownBtn} onClick={onClick}>
      <p className={style.label}>
        {selected} <FaCaretDown />
      </p>

      <div ref={ref} className={`${style.dropdown} ${isOpen && style.open}`}>
        {options.map((option) => (
          <div
            className={style.dropdownItem}
            key={option}
            onClick={() => stateChanged(option)}
            value={selected}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
