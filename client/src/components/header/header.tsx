import { Button } from "../../components/index.ts";

import HeaderProps from "./types.ts";

import "./header.css";

const onClickLogIn = () => {}; // will be added
const onClickLogOut = () => {}; // will be added

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className="buttons">
        <Button value="Log In" onClick={onClickLogIn} />
        <Button value="Log Out" onClick={onClickLogOut} />
      </div>
    </header>
  );
};

export default Header;
