import "./style.css";
import { useEffect, useState } from "react";
import { usePlayers } from "../../PlayersContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const [weatherProbability, setWeatherProbablity] = useState(0);
  const [answersPlayer1, setAnswersPlayer1] = useState([]);
  const [answersPlayer2, setAnswersPlayer2] = useState([]);
  const [amountAnsweredQuestions, setAmountAnsweredQuestions] = useState(0);
  const [questionFinished, setQuestionFinished] = useState(false);
  const [questionClassName, setQuestionClassName] =
    useState("question__answer");
  const [clickedQuestion, setClickedQuestion] = useState(null);
  const [skipping, setSkipping] = useState(false);

  const getRandomizeAnswers = (answers, numberAnswers) => {
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
    return shuffledAnswers.slice(0, numberAnswers);
  };

  useEffect(() => {
    setWeatherProbablity(Math.random());
    setAmountAnsweredQuestions(0);
    setAnswersPlayer1(getRandomizeAnswers(questionPlayer1.answers));
    if (gameState === "tournament") {
      setAnswersPlayer2(getRandomizeAnswers(questionPlayer2.answers));
    }
  }, []);

  const updateScore = (newScore) => {
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayer].score[currentHole] = newScore;
    setPlayers(updatedPlayers);
  };

  const handleClickedAnswer = (answer, index) => {
    setClickedQuestion(index);
    setAmountAnsweredQuestions(amountAnsweredQuestions + 1);
    setQuestionFinished(true);

    if (answer.correct === true) {
      setQuestionClassName("question__answer question__answer--corect");
      if (weatherProbability < 0.75) {
        updateScore(2);
      } else {
        updateScore(3);
      }
    }

    if (answer.correct === false) {
      setQuestionClassName("question__answer question__answer--wrong");
      if (weatherProbability < 0.75) {
        updateScore(3);
      } else {
        updateScore(4);
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

  const handleActionButton = () => {
    if (
      (gameState === "training" && amountAnsweredQuestions === 1) ||
      (gameState === "tournament" && amountAnsweredQuestions === 2)
    ) {
      if (currentHole === 8) {
        navigate("/result");
      }
      setGameState(false);
      setNextHole(currentHole + 1);
      checkCurrentPlayer();
    }

    if (gameState === "tournament" && amountAnsweredQuestions === 1) {
      setQuestionClassName("question__answer");
      setQuestionFinished(false);
      if (currentPlayer === 0) {
        setCurrentPlayer(1);
      } else setCurrentPlayer(0);
    }
  };

  const handleSkipButton = () => {
    setAmountAnsweredQuestions(amountAnsweredQuestions + 1);
    setSkipping(true);
    setQuestionFinished(true);
    updateScore(7);
  };

  useEffect(() => {
    handleActionButton();
  }, [skipping]);

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
        <div className="question__answersblock">
          {(currentPlayer === 0 ? answersPlayer1 : answersPlayer2).map(
            (answer, index) => (
              <p
                className={`
                ${
                  index === clickedQuestion
                    ? questionClassName
                    : "question__answer"
                } ${questionFinished && "question__answer--disabled"}
              `}
                key={index}
                onClick={() => handleClickedAnswer(answer, index)}
              >
                {answer.text}
              </p>
            )
          )}
        </div>
        <div className="question__buttonBlock">
          <div
            className={
              questionFinished
                ? "question__button question__button--disabled"
                : "question__button"
            }
            onClick={handleSkipButton}
          >
            Přeskočit (zapíšu 7)
          </div>
          <div
            className={
              questionFinished
                ? "question__button question__button--action"
                : "question__button question__button--disabled question__button--action"
            }
            onClick={handleActionButton}
          >
            {gameState === "training" && "DALŠÍ JAMKA"}
            {((gameState === "tournament" &&
              amountAnsweredQuestions === 1 &&
              questionFinished === false) ||
              amountAnsweredQuestions === 2) &&
              "DALŠÍ JAMKA"}
            {((gameState === "tournament" && amountAnsweredQuestions === 0) ||
              (gameState === "tournament" &&
                amountAnsweredQuestions === 1 &&
                questionFinished === true)) &&
              "DALŠÍ HRÁČ"}
          </div>
        </div>
      </div>
    </div>
  );
};
