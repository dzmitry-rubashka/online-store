import InputProps from "./types";

import "./input.css";

const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      className="input"
    />
  );
};

export default Input;
