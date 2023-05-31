import ButtonProps from "./types";

import "./button.css";

const Button: React.FC<ButtonProps> = ({
  value,
  variant = "primary",
  onClick,
}) => {
  return (
    <button onClick={onClick} className={variant}>
      {value}
    </button>
  );
};

export default Button;
