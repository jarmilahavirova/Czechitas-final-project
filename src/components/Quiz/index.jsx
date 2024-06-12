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
  const { players, setPlayers } = usePlayers();
  const { gameState } = usePlayers();
  const [weatherProbability, setWeatherProbablity] = useState(0);
  const [amountAnsweredQuestions, setAmountAnsweredQuestions] = useState(0);
  const [questionFinished, setQuestionFinished] = useState(false);
  const [holeFinished, setHoleFinished] = useState(false);
  const [questionClassName, setQuestionClassName] =
    useState("question__answer");
  const [clickedQuestion, setClickedQuestion] = useState(null);

  useEffect(() => {
    setWeatherProbablity(Math.random());
    setAmountAnsweredQuestions(0);
  }, []);

  const updateScore = (newScore) => {
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayer].score[currentHole] = newScore;
    setPlayers(updatedPlayers);
  };

  const handleClickedAnswer = (answer, index) => {
    console.log("Kliknuto na odpověď");
    setClickedQuestion(index);
    setAmountAnsweredQuestions(amountAnsweredQuestions + 1);
    setQuestionFinished(true);

    if (answer.correct === true) {
      setQuestionClassName("question__answer question__answer--corect");
      if (weatherProbability < 0.75) {
        updateScore(2);
        console.log("Hraje za 2");
      } else {
        updateScore(3);
        console.log("Hraje za 3 (fouká)");
      }
    }

    if (answer.correct === false) {
      setQuestionClassName("question__answer question__answer--wrong");
      if (weatherProbability < 0.75) {
        console.log("Hraje za 3");
        updateScore(3);
      } else {
        updateScore(4);
        console.log("Hraje za 4 (fouká)");
      }
    }
  };

  const checkCurrentPlayer = () => {
    if (gameState === "tournament") {
      for (let i = currentHole; i >= 0; i--) {
        if (players[1].score[i] < players[0].score[i]) {
          setCurrentPlayer(1);
          return;
        } else if (players[1].score[i] > players[0].score[i]) {
          setCurrentPlayer(0);
          return;
        }
      }
      setCurrentPlayer(0);
    }
  };

  const handleOkButton = () => {
    if (
      (gameState === "training" && amountAnsweredQuestions === 1) ||
      (gameState === "tournament" && amountAnsweredQuestions === 2)
    ) {
      setGameState(false);
      setNextHole(currentHole + 1);
      checkCurrentPlayer();
    }

    if (gameState === "tournament" && amountAnsweredQuestions === 1) {
      setQuestionClassName("question__answer");
      if (currentPlayer === 0) {
        setCurrentPlayer(1);
      } else setCurrentPlayer(0);
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
        <p className="question__textQuestion">
          {currentPlayer === 0
            ? questionPlayer1.question
            : questionPlayer2.question}
        </p>
        {(currentPlayer === 0 ? questionPlayer1 : questionPlayer2).answers.map(
          (answer, index) => (
            <p
              className={
                index === clickedQuestion
                  ? questionClassName
                  : "question__answer"
              }
              key={index}
              onClick={() => handleClickedAnswer(answer, index)}
            >
              {answer.text}
            </p>
          )
        )}

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
