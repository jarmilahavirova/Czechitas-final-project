import { useEffect, useState } from "react";
import { AvatarAside } from "../../components/AvatarAside";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { Quiz } from "../../components/Quiz";
import { ScoreCard } from "../../components/Scorecard";
import { usePlayers } from "../../PlayersContext";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const GamePage = ({}) => {
  const { players, setPlayers } = usePlayers();
  const [playing, setPlaying] = useState(false);
  const [currentHole, setCurrentHole] = useState(0);
  const [playersAmount, setPlayersAmount] = useState(1);

  console.log(players);

  const getRandomizeQuestions = (questions, numberHoles) => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberHoles);
  };

  return (
    <main className="game">
      {playersAmount === 1 && (
        <AvatarAside
          playerName={players[0].playerName}
          avatar={players[0].playerAvatar}
          side={"left"}
        />
      )}
      <div className="game__middle-section">
        <Header />
        {playing ? (
          <Quiz />
        ) : (
          <Map
            currentHole={currentHole}
            startQuestion={setPlaying}
            gameState={playing}
          />
        )}
        <ScoreCard />
        <p
          onClick={() => {
            setCurrentHole(currentHole + 1);
          }}
        >
          Posun jamky
        </p>
      </div>
      {playersAmount === 2 && (
        <AvatarAside
          playerName={players[1].playerName}
          avatar={players[1].playerAvatar}
          side={"right"}
        />
      )}
    </main>
  );
};
