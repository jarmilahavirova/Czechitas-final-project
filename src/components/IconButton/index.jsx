import "./style.css";
import { Link } from "react-router-dom";

export const IconButton = ({ text, icon, selected, onClick, type, link }) => {
  return (
    <div className="icon_button_container">
      {type === "button" ? (
        <button
          onClick={onClick}
          className={
            selected ? "icon_button icon_button--selected" : "icon_button"
          }
          style={{ backgroundImage: `url(${icon})` }}
        ></button>
      ) : (
        <Link className={
          selected ? "icon_button icon_button--selected" : "icon_button"
        } to={link} style={{ backgroundImage: `url(${icon})` }}></Link>
      )}
      {text && <p className="icon_button_text">{text}</p>}
    </div>
  );
};
