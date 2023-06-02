import DropdownProps from "./types";

import "./dropdown.css";

const Dropdown: React.FC<DropdownProps> = ({
  id,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <>
      {selectedValue === "min" || !selectedValue ? (
        <select
          id={id}
          className="dropdown-container"
          defaultValue={options[0]}
          onChange={onChange}
        >
          {options.map((option) => (
            <option className="dropdown-option" value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={id}
          className="dropdown-container"
          defaultValue={options[options.length - 1]}
          onChange={onChange}
        >
          {options.map((option) => (
            <option className="dropdown-option" value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Dropdown;
