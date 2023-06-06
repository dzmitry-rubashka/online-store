interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  value?: string | number;
  name?: string;
  options: string[] | number[];
}

export default DropdownProps;
