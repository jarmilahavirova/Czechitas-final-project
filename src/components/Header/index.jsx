import { IconButton } from "../IconButton";
import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <IconButton icon="/icon-home.png" />
      </Link>
      <h1 className="header__title">RULES OPEN 2024</h1>
      <IconButton icon="/icon-info.png" />
    </header>
  );
};
