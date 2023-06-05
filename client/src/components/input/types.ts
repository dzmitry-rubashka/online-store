interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  type?: "string" | "number";
}

export default InputProps;
