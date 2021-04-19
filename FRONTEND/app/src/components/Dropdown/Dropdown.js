const Dropdown = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
