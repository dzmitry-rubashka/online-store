interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  value?: string | number;
  name?: string;
  options: string[] | number[];
  selectedValue?: "min" | "max";
}

export default DropdownProps;
