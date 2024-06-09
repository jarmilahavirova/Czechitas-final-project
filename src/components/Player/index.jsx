import head1 from "../../../assets/head1.png";
import head2 from "../../../assets/head2.png";
import head3 from "../../../assets/head3.png";
import head4 from "../../../assets/head4.png";
import "./style.css";
import { useState } from "react";

export const Player = ({
  playersNumber,
  disabled,
  selectedName,
  selectedAvatar,
  name,
  setName
}) => {
  const [avatar, setAvatar] = useState("");
  

  const handleSelectName = (name) => {
    selectedName(name);
    setName(name);
  };

  const handleSelectAvatar = (avatar) => {
    selectedAvatar(avatar);
    setAvatar(avatar);
  };

  return (
    <div className={disabled ? "player disabled" : "player"}>
      <p className="player_text">Hráč {playersNumber}</p>
      <div className="imgInput">
        <div className="images">
          <img
            className={avatar === "head1" ? "selected" : ""}
            src={head1}
            alt=""
            onClick={() => handleSelectAvatar("head1")}
          />
          <img
            className={avatar === "head2" ? "selected" : ""}
            src={head2}
            alt=""
            onClick={() => handleSelectAvatar("head2")}
          />
          <img
            className={avatar === "head3" ? "selected" : ""}
            src={head3}
            alt=""
            onClick={() => handleSelectAvatar("head3")}
          />
          <img
            className={avatar === "head4" ? "selected" : ""}
            src={head4}
            alt=""
            onClick={() => handleSelectAvatar("head4")}
          />
        </div>
        <input value={name} onChange={(evt) => handleSelectName(evt.target.value)}></input>
      </div>
    </div>
  );
};
