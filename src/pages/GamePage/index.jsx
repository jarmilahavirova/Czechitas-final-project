import { useState } from "react";
import { AvatarAside } from "../../components/AvatarAside";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { Quiz } from "../../components/Quiz";
import { ScoreCard } from "../../components/Scorecard";
import { usePlayers } from "../../PlayersContext";
import "./style.css";

export const GamePage = ({}) => {
  const [playing, setPlaying] = useState(false);
  const [currentHole, setCurrentHole] = useState(0);
  const { players, setPlayers } = usePlayers();

  const randomize = () => {};
  console.log(players);

  return (
    <main className="game">
      <AvatarAside
        playerName={players[0].playerName}
        avatar={players[0].playerAvatar}
        side={"left"}
      />
      <div className="game__middle-section">
        <Header />
        {playing ? <Quiz /> : <Map currentHole={currentHole} />}
        <ScoreCard />
        <p
          onClick={() => {
            setCurrentHole(currentHole + 1);
          }}
        >
          Posun jamky
        </p>
      </div>
      <AvatarAside
        playerName={players[1].playerName}
        avatar={players[1].playerAvatar}
        side={"right"}
      />
    </main>
  );
};
