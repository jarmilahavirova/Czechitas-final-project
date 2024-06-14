import { Link } from "react-router-dom";
import "./style.css";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";
import { Header } from "../../components/Header";
import { usePlayers } from "../../PlayersContext";
import { useEffect, useState } from "react";
import { calculateSum } from "../../utils/calculateSum.js";
import { Announcement } from "../../components/Announcement/index.jsx";

export const ResultPage = () => {
  const { players } = usePlayers();
  const { gameState } = usePlayers();
  const [scorePlayer0, setScorePlayer0] = useState(0);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (players.length !== 0) {
      setScorePlayer0(calculateSum(players[0].score));
      setScorePlayer1(calculateSum(players[1].score));
    }
  }, []);

  useEffect(() => {
    if (gameState === "tournament") {
      if (scorePlayer0 < scorePlayer1) {
        setWinner(0);
      } else if (scorePlayer1 < scorePlayer0) {
        setWinner(1);
      } else if (scorePlayer0 === scorePlayer1 && scorePlayer1 > 0) {
        setWinner("tie");
      }
    }
  }, [scorePlayer0]);

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
      <Header />
      <div className="result__container">
        <Announcement
          winner={winner}
          chosenAvatar={chosenAvatar}
          scorePlayer0={scorePlayer0}
          scorePlayer1={scorePlayer1}
        />
        <Link className="result__btn-play-again" to="/">
          {scorePlayer0 === 0 ? "ZAČÍT HRÁT" : "ZAČÍT HRÁT ZNOVU"}
        </Link>
      </div>
    </>
  );
};
