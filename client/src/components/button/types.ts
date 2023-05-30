interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  onClick?: React.MouseEventHandler;
}

export default ButtonProps;
