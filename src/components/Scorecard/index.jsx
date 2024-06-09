import "./style.css";
import { usePlayers } from "../../PlayersContext";
import { calculateSum } from "../../utils/calculateSum.js";

const headScorecard = ["", "Hráč", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Celkem"];

export const ScoreCard = () => {
  const { players } = usePlayers();

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
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              {player.score.map((score, index) => (
                <td key={index}>{score}</td>
              ))}
              <td>{calculateSum(player.score)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
