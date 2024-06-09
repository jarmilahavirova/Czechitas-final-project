import { Link } from "react-router-dom";
import "./style.css";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";

export const ResultPage = () => {
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

  return (
    <>
      <h1>RULES OPEN 2024</h1>
      <div className="result_container">
        <div className="announcement_container">
          <p>Vítězem dnešního turnaje se stává </p>
          <h2>{"Kirsten"}</h2>
        </div>
        <div className="winner_img_container">
          <img
            src={chosenAvatar(1)}
            alt="Hráčův avatar"
            className="result_avatar"
          />
          <img src=""></img>
        </div>
        <Link>HRÁT ZNOVU</Link>
      </div>
    </>
  );
};
