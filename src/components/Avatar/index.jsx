import "./style.css";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";
import head1 from "../../../assets/head1.png";
import head2 from "../../../assets/head2.png";
import head3 from "../../../assets/head3.png";
import head4 from "../../../assets/head4.png";

export const Avatar = ({
  playerName,
  avatar,
  side,
  isCurrentPlayer,
  location,
}) => {
  const chosenAvatar = (avatar) => {
    if (avatar === "1") {
      return avatar1;
    } else if (avatar === "2") {
      return avatar2;
    } else if (avatar === "3") {
      return avatar3;
    } else if (avatar === "4") {
      return avatar4;
    }
  };

  const chosenHead = (avatar) => {
    if (avatar === "1") {
      return head1;
    } else if (avatar === "2") {
      return head2;
    } else if (avatar === "3") {
      return head3;
    } else if (avatar === "4") {
      return head4;
    }
  };

  return (
    <aside
      className={`avatar ${
        location === "aside" ? "avatar--aside" : "avatar--top"
      }`}
    >
      {location === "top" && (
        <img
          src={chosenHead(avatar)}
          alt="Hráčův avatar"
          className={
            side === "right"
              ? "avatar__image avatar__image--right"
              : "avatar__image"
          }
        />
      )}

      {playerName && (
        <h2
          className={
            isCurrentPlayer
              ? "avatar__title avatar__title--current"
              : "avatar__title"
          }
        >
          {playerName}
        </h2>
      )}
      {location === "aside" && (
        <img
          src={chosenAvatar(avatar)}
          alt="Hráčův avatar"
          className={
            side === "right"
              ? "avatar__image avatar__image--right"
              : "avatar__image"
          }
        />
      )}
    </aside>
  );
};
