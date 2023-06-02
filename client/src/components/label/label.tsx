import LabelProps from "./types";

import "./label.css";

const Label: React.FC<LabelProps> = ({ children, id }) => {
  return (
    <label htmlFor={id} className="label-container">
      {children}
    </label>
  );
};

export default Label;
