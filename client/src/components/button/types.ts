interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant: "primary" | "secondary";
  onClick?: React.MouseEventHandler;
}

export default ButtonProps;
