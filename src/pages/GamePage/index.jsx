import { useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
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

  if (players.length === 0) {
    return null;
  }

  return (
    <main className="game">
      {(gameState === "training" || gameState === "tournament") && (
        <Avatar
          playerName={players[0].playerName}
          avatar={players[0].playerAvatar}
          side={"left"}
          isCurrentPlayer={currentPlayer === 0 && true}
          location="aside"
        />
      )}
      <div className="game__middle-section">
        <div className="game__header-section">
          <Header />
          {(gameState === "training" || gameState === "tournament") && (
            <div className="game__avatar-block">
              <Avatar
                playerName={players[0].playerName}
                avatar={players[0].playerAvatar}
                side={"right"}
                isCurrentPlayer={currentPlayer === 0 && true}
                location="top"
              />
              {gameState === "tournament" && (
                <Avatar
                  playerName={players[1].playerName}
                  avatar={players[1].playerAvatar}
                  side={"left"}
                  isCurrentPlayer={currentPlayer === 1 && true}
                  location="top"
                />
              )}
            </div>
          )}
        </div>
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
            gameSetting={playing}
          />
        )}
        <div className="game__scorecard--section">
          <ScoreCard />
        </div>
        {/* <p
          onClick={() => {
            setCurrentPosition(currentPosition + 1);
            setCurrentHole(currentHole + 1);
          }}
        >
          Posun jamky
        </p> */}
      </div>
      {gameState === "tournament" && (
        <Avatar
          playerName={players[1].playerName}
          avatar={players[1].playerAvatar}
          side={"right"}
          isCurrentPlayer={currentPlayer === 1 && true}
          location="aside"
        />
      )}
    </main>
  );
};
