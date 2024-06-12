import { useEffect, useState } from "react";
import { AvatarAside } from "../../components/AvatarAside";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { Quiz } from "../../components/Quiz";
import { ScoreCard } from "../../components/Scorecard";
import { usePlayers } from "../../PlayersContext";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { questions } from "../../components/questions";

export const GamePage = ({}) => {
  const { players, setPlayers } = usePlayers();
  const { gameState, setGameState } = usePlayers();
  const [playing, setPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentHole, setCurrentHole] = useState(0);
  const [chosenQuestions, setChosenQuestions] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [scores, setScores] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (players.length === 0) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (currentHole > currentPosition) {
      setCurrentPosition(currentPosition + 1);
    }
  });

  const getRandomizeQuestions = (questions, numberHoles) => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberHoles);
  };

  useEffect(() => {
    if (gameState === "tournament") {
      setChosenQuestions(getRandomizeQuestions(questions, 18));
    } else if (gameState === "training") {
      setChosenQuestions(getRandomizeQuestions(questions, 9));
    }
  }, []);

  return (
    <main className="game">
      {(gameState === "training" || gameState === "tournament") && (
        <AvatarAside
          playerName={players[0].playerName}
          avatar={players[0].playerAvatar}
          side={"left"}
          isCurrentPlayer={currentPlayer === 0 && true}
        />
      )}
      <div className="game__middle-section">
        <Header />
        {playing ? (
          <Quiz
            currentHole={currentHole}
            setNextHole={setCurrentHole}
            questionPlayer1={chosenQuestions[currentHole]}
            questionPlayer2={
              gameState === "tournament" && chosenQuestions[currentHole + 9]
            }
            setGameState={setPlaying}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        ) : (
          <Map
            currentHole={currentPosition}
            startQuestion={setPlaying}
            gameState={playing}
          />
        )}
        <ScoreCard />
        <p
          onClick={() => {
            setCurrentPosition(currentPosition + 1);
            setCurrentHole(currentHole + 1);
          }}
        >
          Posun jamky
        </p>
      </div>
      {gameState === "tournament" && (
        <AvatarAside
          playerName={players[1].playerName}
          avatar={players[1].playerAvatar}
          side={"right"}
          isCurrentPlayer={currentPlayer === 1 && true}
        />
      )}
    </main>
  );
};
