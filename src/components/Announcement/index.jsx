import "./style.css";
import { usePlayers } from "../../PlayersContext";
import { results } from "../../components/questions";
import { useEffect, useState } from "react";

export const Announcement = ({
  winner,
  chosenAvatar,
  scorePlayer0,
  scorePlayer1,
}) => {
  const { players } = usePlayers();
  const { gameState } = usePlayers();
  const [resultId, setResultId] = useState(null);

  useEffect(() => {
    if (scorePlayer0 > 0 && scorePlayer0 < 20) {
      setResultId(0);
    } else if (scorePlayer0 >= 20 && scorePlayer0 < 23) {
      setResultId(1);
    } else if (scorePlayer0 >= 23 && scorePlayer0 < 27) {
      setResultId(2);
    } else if (scorePlayer0 >= 27) {
      setResultId(3);
    }
  }, [scorePlayer0]);

  if (gameState === "training" && resultId !== null) {
    return (
      <div className="result__announcement-container">
        <h2>Tvé dnešní skóre je {scorePlayer0}</h2>
        <p>{results[resultId].text} </p>
      </div>
    );
  }

  if (gameState === "tournament" && winner === "tie") {
    return (
      <>
        <div className="result__announcement-container">
          <p>Dnešní turnaj skončil nerozhodně, se skóre {scorePlayer0}. </p>
          <h2>Gratulujeme vám oboum!</h2>
        </div>
        <div className="result__img-container">
          <img
            src={chosenAvatar(Number(players[0].playerAvatar))}
            alt="Avatar hráče 1"
            className="result__avatar"
          />
          <img
            src={chosenAvatar(Number(players[1].playerAvatar))}
            alt="Avatar hráče 1"
            className="result__avatar result__avatar--flipped"
          />
        </div>
      </>
    );
  } else if (gameState === "tournament" && (winner === 0 || winner === 1)) {
    return (
      <>
        <div className="result__announcement-container">
          <p>
            Vítězem dnešního turnaje se se skóre{" "}
            {winner === 0 ? scorePlayer0 : scorePlayer1} stává{" "}
          </p>
          <h2>{players[winner].playerName}</h2>
        </div>
        <div className="result__img-container">
          <img
            src={chosenAvatar(Number(players[winner].playerAvatar))}
            alt="Avatar vítězného hráče"
            className="result__avatar"
          />
        </div>
      </>
    );
  } else {
    return (
      <div className="result__announcement-container">
        <p>Zdá se, že žádná hra ještě neproběhla a to je velká škoda.</p>
        <p>
          Pokud chcete trénovat nebo se vrhnout rovnou na turnaj, pokračujte na
          hlavní stránku stiskem tlačítka níže.
        </p>
      </div>
    );
  }
};
