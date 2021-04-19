const Dropdown = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
