import "./style.css";
export const IconButton = ({ text, icon, selected }) => {
  console.log(icon);
  return (
    <div>
      <button
        className={
          selected ? "icon_button icon_button--selected" : "icon_button"
        }
        style={{ backgroundImage: `url(${icon})` }}
      ></button>
      {text && <p>{text}</p>}
    </div>
  );
};
