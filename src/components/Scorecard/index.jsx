import "./style.css";
import { usePlayers } from "../../PlayersContext";

const headScorecard = ["", "Hráč", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Celkem"];

export const ScoreCard = () => {
  const { players } = usePlayers();
  const calculateSum = (arr) => {
    const numbers = arr.map((item) => {
      if (item === "") {
        return 0;
      } else {
        return parseInt(item);
      }
    });

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
  };

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
