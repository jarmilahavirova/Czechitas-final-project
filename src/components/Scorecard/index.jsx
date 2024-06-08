import "./style.css";

const headScorecard = ["", "Hráč", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Celkem"];
const players = [
  { name: "Isaac", image: "", score: [2, 3, 2, 4, "", "", "", "", ""] },
  { name: "Kristin", image: "", score: [2, 2, 2, 3, "", "", "", "", ""] },
];

export const ScoreCard = () => {
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
              <td>Celkem</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
