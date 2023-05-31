import { Button } from "../../components/index";

import HeaderProps from "./types";

import "./header.css";

const onClickLogIn = () => {}; // will be added
const onClickLogOut = () => {}; // will be added

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className="buttons">
        <Button value="Log In" variant="primary" onClick={onClickLogIn} />
        <Button value="Log Out" variant="primary" onClick={onClickLogOut} />
      </div>
    </header>
  );
};

export default Header;
