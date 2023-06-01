import LabelProps from "./types";

const Label: React.FC<LabelProps> = ({ children, id }) => {
  return <label htmlFor={id}>{children}</label>;
};

export default Label;
