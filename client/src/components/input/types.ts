interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  placeholder?: string;
  type?: "string" | "number";
}

export default InputProps;
