import { IconButton } from "../IconButton";
import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <IconButton type="link" icon="/icon-home.png" link="/" />

      <h1 className="header__title">RULES OPEN 2024</h1>

      <IconButton type="link" icon="/icon-info.png" link="/about" />
    </header>
  );
};
