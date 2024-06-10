import "./style.css";
import { questions } from "../questions";
import { useEffect, useState } from "react";

export const Quiz = ({
  currentHole,
  setNextHole,
  questionPlayer1,
  questionPlayer2,
  setGameState,
}) => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [weatherProbability, setWeatherProbablity] = useState(0);

  const handleOkButton = () => {
    setGameState(false);
    setNextHole(currentHole + 1);
  };

  useEffect(() => {
    setWeatherProbablity(Math.random());
  }, []);

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
        <p className="question__textQuestion">{questions[0].question}</p>
        {questions[0].answers.map((answer, index) => (
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
