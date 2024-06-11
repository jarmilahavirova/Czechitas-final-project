import "./style.css";
import { usePlayers } from "../../PlayersContext";
import { calculateSum } from "../../utils/calculateSum.js";

const headScorecard = ["", "Hráč", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Celkem"];

export const ScoreCard = () => {
  const { players } = usePlayers();
  const { gameState } = usePlayers();

  return (
    <div className="scorecard">
      <table className="scorecard__table">
        <thead className="scorecard__header">
          <tr>
            {headScorecard.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(gameState === "training" || gameState === "tournament") && (
            <tr>
              <td>{1}</td>
              <td>{players[0].playerName}</td>
              {players[0].score.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
              <td>{calculateSum(players[0].score)}</td>
            </tr>
          )}
          {gameState === "tournament" && (
            <tr>
              <td>{2}</td>
              <td>{players[1].playerName}</td>
              {players[1].score.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
              <td>{calculateSum(players[1].score)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
