import ButtonProps from "./types.ts";

import "./button.css";

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Button;
