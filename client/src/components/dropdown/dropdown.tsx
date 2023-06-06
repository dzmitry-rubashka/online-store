import DropdownProps from "./types";

import "./dropdown.css";

const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        className="dropdown-container"
        onChange={onChange}
      >
        {options.map((option) => (
          <option className="dropdown-option" key={option} >
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
