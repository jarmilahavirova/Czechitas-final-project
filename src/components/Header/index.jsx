import { IconButton } from "../IconButton";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <IconButton icon="/icon-home.png" />
      <h1 className="header__title">RULES OPEN 2024</h1>
      <IconButton icon="/icon-info.png" />
    </header>
  );
};
