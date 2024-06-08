import head1 from "../../../assets/head1.png";
import head2 from "../../../assets/head2.png";
import head3 from "../../../assets/head3.png";
import head4 from "../../../assets/head4.png";
import "./style.css";
import { useState } from "react";


export const Player = ({ playersNumber, disabled }) => {
  const [avatar, setAvatar] = useState("");

  return (
    <div className={
        disabled ? "player disabled" : "player"
      }>
      <p className="player_text">Hráč {playersNumber}</p>
      <div className="imgInput">
        <div className="images">
        <img
          className={avatar === "head1" ? "selected" : ""}
          src={head1}
          alt=""
          onClick={() => setAvatar("head1")}
        />
        <img
          className={avatar === "head2" ? "selected" : ""}
          src={head2}
          alt=""
          onClick={() => setAvatar("head2")}
        />
        <img
          className={avatar === "head3" ? "selected" : ""}
          src={head3}
          alt=""
          onClick={() => setAvatar("head3")}
        />
        <img
          className={avatar === "head4" ? "selected" : ""}
          src={head4}
          alt=""
          onClick={() => setAvatar("head4")}
        />
        </div>
        <input></input>
      </div>
    </div>
  );
};
