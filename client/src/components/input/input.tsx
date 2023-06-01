import InputProps from "./types";

import './input.css'

const Input: React.FC<InputProps> = ({ id, name, placeholder, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      className="input"
    />
  );
};

export default Input;
