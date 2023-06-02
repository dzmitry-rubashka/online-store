interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: string[] | number[];
  selectedValue?: "min" | "max";
}

export default DropdownProps;
