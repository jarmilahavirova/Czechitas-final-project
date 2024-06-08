import "./style.css";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";

export const AvatarAside = ({ playerName, avatar, side }) => {
  const chosenAvatar = (avatar) => {
    if (avatar === 1) {
      return avatar1;
    } else if (avatar === 2) {
      return avatar2;
    } else if (avatar === 3) {
      return avatar3;
    } else if (avatar === 4) {
      return avatar4;
    }
  };

  console.log(avatar);
  return (
    <aside className="avatar">
      <h2 className="avatar__title">{playerName}</h2>
      <img
        src={chosenAvatar(avatar)}
        alt="Hráčův avatar"
        className={
          side === "right"
            ? "avatar__image avatar__image--right"
            : "avatar__image"
        }
      />
    </aside>
  );
};
