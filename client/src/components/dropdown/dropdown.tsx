import DropdownProps from "./types";

import "./dropdown.css";

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
