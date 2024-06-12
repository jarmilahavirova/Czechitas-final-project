import "./style.css";
import { useEffect, useState } from "react";
import { usePlayers } from "../../PlayersContext";

export const Quiz = ({
  currentHole,
  setNextHole,
  questionPlayer1,
  questionPlayer2,
  setGameState,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const { players } = usePlayers();
  const { gameState } = usePlayers();
  const [weatherProbability, setWeatherProbablity] = useState(0);

  useEffect(() => {
    setWeatherProbablity(Math.random());
  }, []);

  const handleOkButton = () => {
    setGameState(false);
    setNextHole(currentHole + 1);
  };

  const checkCurrentPlayer = () => {
    if (gameState === "tournament") {
      for (let i = currentHole - 1; i > 1; i--) {
        if (players[1].score[i] < players[0].score[i]) {
          setCurrentPlayer(1);
          return;
        }
      }
    }
  };

  return (
    <div className="question">
      <div className="question__infoside">
        <h2 className="question__title">Jamka #{currentHole + 1}</h2>
        <img
          className="question__teesign"
          src={`./Hole${currentHole + 1}.png`}
          alt={`Teesign jamky č.${currentHole + 1}`}
        />
        <img
          src={
            weatherProbability < 0.75 ? "./icon-sun.png" : "./icon-windy.png"
          }
          alt={weatherProbability < 0.75 ? "Svítí sluníčko" : "Pozor, fouká!"}
          className="question__weather"
        />
      </div>
      <div className="question__textside">
        <p className="question__textQuestion">{questionPlayer1.question}</p>
        {questionPlayer1.answers.map((answer, index) => (
          <p className="question__answer" key={index}>
            {answer.text}
          </p>
        ))}
        <div className="question__buttonBox">
          <div className="question__button">Přeskočit</div>
          <div
            className="question__button question__button--action"
            onClick={handleOkButton}
          >
            OK
          </div>
        </div>
      </div>
    </div>
  );
};
